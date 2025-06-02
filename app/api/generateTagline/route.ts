import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function GET(reruest: Request) {
    try {
        const chatResponse = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content:
                        'You are a creative developer with a strong sense of humor and a casual, internet-native voice. You write short, memorable, first-person portfolio headlines that feel authentic and dev-core. Your style avoids buzzwords and embraces real-life developer culture — sometimes referencing snacks or matcha.',
                },
                {
                    role: 'user',
                    content:
                        'Write a single 6-8 word, first-person, funny portfolio headline. Casual, dev-core tone. No buzzwords. Mention snacks or matcha occasionally. No clean code, legacy code, ninja, or wizard.',
                },
            ],
            max_tokens: 40,
        });
        const tagline = chatResponse.choices[0].message.content?.trim();
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
