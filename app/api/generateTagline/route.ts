import { OpenAI } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';
import { NextRequest } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { type MessageParam } from '@anthropic-ai/sdk/resources/messages';
import { GoogleGenAI } from '@google/genai';

const FALLBACK_TAGLINE = 'I build things, then hunt down the missing semicolon.';

// Unified message type that works with both OpenAI and Anthropic SDKs
type UnifiedMessageRole = 'system' | 'user' | 'assistant';

interface UnifiedMessage {
    role: UnifiedMessageRole;
    content: string;
    name?: string;
}

function getRequiredEnv(name: string): string {
    const value = process.env[name];

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const model = searchParams.get('model');
    try {
        let tagline: string | undefined;
        const messages: UnifiedMessage[] = [
            {
                role: 'system',
                content:
                    'You are a creative software engineer who builds AI-powered products and orchestrates AI agents. You write short, memorable, first-person portfolio headlines with a strong sense of humor and a casual, internet-native dev-core voice. Avoid buzzwords and corporate jargon unless making a joke about them; make AI feel practical, specific, and lightly self-aware. Embrace real developer culture, sometimes referencing snacks or matcha.',
            },
            {
                role: 'user',
                content:
                    'Write a single 6–12 word, first-person, funny portfolio headline. Use a casual, dev-core, internet-native tone. Avoid buzzwords except when clearly used as the joke. Reflect someone who builds AI-powered products, coordinates AI agents, and turns intelligent systems into useful tools—but express this naturally, not as a list of credentials. You may occasionally reference snacks, matcha, zen, dark mode, or office culture. No "clean code," "legacy code," "ninja," or "wizard." No partial words or quotation marks.',
            },
        ];
        // default to chatGPT
        if (!model || model === 'chatGPT') {
            console.log('generating chatGPT tagline...');
            const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
            const chatResponse = await openai.chat.completions.create({
                model: getRequiredEnv('OPENAI_TAGLINE_MODEL'),
                messages: messages as ChatCompletionMessageParam[],
                max_completion_tokens: 64,
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
                    model: getRequiredEnv('GROK_TAGLINE_MODEL'),
                    messages: messages,
                    stream: false,
                }),
            });
            if (!grokResponse.ok) {
                throw new Error(`Grok request failed with status ${grokResponse.status}`);
            }

            const grokJson = await grokResponse.json();
            tagline = grokJson.choices[0].message.content?.trim();
        } else if (model === 'claude') {
            console.log('generating claude tagline...');
            const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
            // Extract system message for Anthropic (it goes in a separate field)
            const systemMessage = messages[0];
            const conversationMessages = [messages[1]];
            const msg = await anthropic.messages.create({
                model: getRequiredEnv('ANTHROPIC_TAGLINE_MODEL'),
                max_tokens: 64,
                system: systemMessage?.content || '',
                messages: conversationMessages as MessageParam[], // Type assertion needed for Anthropic
            });
            // Anthropic returns content as an array of content blocks
            const contentBlock = msg.content[0];
            if (contentBlock.type === 'text') {
                tagline = contentBlock.text?.trim();
            }
        } else if (model === 'gemini') {
            console.log('generating gemini tagline...');
            const gemini = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
            const geminiResponse = await gemini.models.generateContent({
                model: getRequiredEnv('GEMINI_TAGLINE_MODEL'),
                contents: messages[0].content + ' ' + messages[1].content,
            });
            tagline = geminiResponse.text;
        } else {
            throw new Error(`Unsupported tagline model: ${model}`);
        }

        return new Response(JSON.stringify({ tagline: tagline || FALLBACK_TAGLINE }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) {
        console.error(e);
        return new Response(JSON.stringify({ tagline: FALLBACK_TAGLINE }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
