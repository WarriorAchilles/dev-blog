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
                        'You are a creative software engineer with a strong sense of humor and a casual, internet-native voice. You write short, memorable, first-person portfolio headlines that feel authentic and dev-core. Your style avoids buzzwords and embraces real-life developer culture - sometimes referencing snacks or matcha.',
                },
                {
                    role: 'user',
                    content:
                        'Write a single 6-12 word, first-person, funny portfolio headline. Casual, dev-core tone. No buzzwords. Randomly mention things like snacks, matcha, zen, dark mode, or similar things. No clean code, legacy code, ninja, or wizard. Make sure there are no misspellings or partial words. Occasonally make an office culture joke. Do not wrap in quotes.',
                },
            ],
            max_tokens: 45,
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
