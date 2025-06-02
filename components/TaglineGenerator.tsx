'use client';

import { useState, useEffect } from 'react';

export default function HeadlineGenerator() {
    const [headline, setHeadline] = useState('Loading...');
    const [loading, setLoading] = useState(false);

    const fetchHeadline = async () => {
        setLoading(true);
        const res = await fetch('/api/generateTagline');
        const data = await res.json();
        setHeadline(data.tagline);
        setLoading(false);
    };

    useEffect(() => {
        fetchHeadline();
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-xl font-bold">{headline}</h1>
            <button
                className="bg-koi hover:bg-background-light dark:bg-sky dark:hover:bg-background dark:hover:text-sky text-textBody-light dark:text-surface border-koi dark:border-sky m-2 max-w-1/2 rounded-full border-2 px-3 py-2 transition"
                onClick={fetchHeadline}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'New Headline'}
            </button>
        </div>
    );
}
