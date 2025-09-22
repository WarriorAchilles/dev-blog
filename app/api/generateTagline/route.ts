import { OpenAI } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { type MessageParam } from '@anthropic-ai/sdk/resources/messages';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Unified message type that works with both OpenAI and Anthropic SDKs
type UnifiedMessageRole = 'system' | 'user' | 'assistant';

interface UnifiedMessage {
    role: UnifiedMessageRole;
    content: string;
    name?: string;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const model = searchParams.get('model');
    try {
        let tagline: string | undefined = '';
        const messages: UnifiedMessage[] = [
            {
                role: 'system',
                content:
                    'You are a creative software engineer with a strong sense of humor and a casual, internet-native voice. You write short, memorable, first-person portfolio headlines that feel authentic and dev-core. Your style avoids buzzwords and embraces real-life developer culture - sometimes referencing snacks or matcha.',
            },
            {
                role: 'user',
                content:
                    'Write a single 6-12 word, first-person, funny portfolio headline. Casual, dev-core tone. No buzzwords. Randomly mention things like snacks, matcha, zen, dark mode, or similar things. No clean code, legacy code, ninja, or wizard. Make sure there are no misspellings or partial words. Occasonally make an office culture joke. Do not wrap in quotes.',
            },
        ];
        // default to chatGPT
        if (!model || model === 'chatGPT') {
            console.log('generating chatGPT tagline...');
            const chatResponse = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: messages as ChatCompletionMessageParam[],
                max_tokens: 45,
            });
            tagline = chatResponse.choices[0].message.content?.trim();
        } else if (model === 'grok') {
            console.log('generating grok tagline...');
            const grokResponse = await fetch('https://api.x.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + process.env.GROK_API_KEY,
                },
                body: JSON.stringify({
                    model: 'grok-3-mini',
                    messages: messages,
                    stream: false,
                }),
            });
            const grokJson = await grokResponse.json();
            tagline = grokJson.choices[0].message.content?.trim();
        } else if (model === 'claude') {
            console.log('generating claude tagline...');
            // Extract system message for Anthropic (it goes in a separate field)
            const systemMessage = messages[0];
            const conversationMessages = [messages[1]];
            const msg = await anthropic.messages.create({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 45,
                system: systemMessage?.content || '',
                messages: conversationMessages as MessageParam[], // Type assertion needed for Anthropic
            });
            // Anthropic returns content as an array of content blocks
            const contentBlock = msg.content[0];
            if (contentBlock.type === 'text') {
                tagline = contentBlock.text?.trim();
            }
        }

        return new Response(JSON.stringify({ tagline }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ error: 'Failed to generate tagline' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
