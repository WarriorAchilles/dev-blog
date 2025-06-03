'use client';

import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import { formatDate } from 'pliny/utils/formatDate';
import { useState, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';

const MAX_DISPLAY = 5;

export default function Homepage({ posts }) {
    const [tagline, setTagline] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchTagline = async () => {
        setLoading(true);
        if (process.env.NEXT_PUBLIC_IS_DEV === 'true') {
            setTagline('dev mode tagline*');
        } else {
            const res = await fetch('/api/generateTagline');
            const data = await res.json();
            setTagline(data.tagline + '*');
        }

        setLoading(false);
    };

    useEffect(() => {
        fetchTagline();
    }, []);

    return (
        <>
            <div className="container mb-3 flex h-[80vh] flex-col items-center justify-center">
                <div className="container flex w-full flex-col items-center justify-center pb-30">
                    <p className="text-textBody text-lg">
                        <span className="dark:text-matcha text-koi text-lg">Hi, </span>I'm
                    </p>
                    <h1 className="text-textHeading-light dark:text-textHeading mb-5 text-5xl md:text-6xl">
                        Zion Emond
                    </h1>
                    {loading ? (
                        <div className="text-textBody-light dark:text-textBody mb-8 flex max-w-fit flex-row justify-evenly text-sm md:text-3xl">
                            Generating tagline...
                            <svg
                                aria-hidden="true"
                                className="fill-textBody text-background-light dark:text-background h-6 w-6 animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                        </div>
                    ) : (
                        <TypewriterText text={`${tagline}`} />
                    )}
                    <p className="text-textBody-light dark:text-textBody mb-3 text-lg">
                        I'm a software engineer building things with TypeScript, React, and Node.js
                        (among other things). I focus on making web apps that are fast, functional,
                        and easy to use — both for the people running them and the people using
                        them.
                    </p>
                    <a
                        className="bg-koi dark:bg-sky dark:hover:text-sky dark:focus:text-sky text-textBody-light dark:text-surface border-koi dark:border-sky m-2 max-w-1/2 rounded-full border-2 px-3 py-2 transition hover:bg-transparent focus:bg-transparent"
                        href="/portfolio"
                    >
                        My projects
                    </a>
                </div>
                <div className="container flex flex-col items-center md:flex-row">
                    <p className="text-textBody-light dark:text-textBody mb-5 text-sm md:mr-6 md:mb-0 md:w-3/4 lg:mr-0">
                        *I totally wrote this tagline myself and totally didn't ask ChatGPT to
                        generate it.
                        <br />
                        That being said, if you want to ask ChatGPT to generate a new tagline, click
                        the button
                    </p>
                    <button
                        className="bg-koi dark:bg-sky dark:hover:text-sky dark:focus:text-sky text-textBody-light dark:text-surface border-koi dark:border-sky flex w-[200px] items-center justify-evenly rounded-full border-2 px-3 py-2 text-wrap transition hover:bg-transparent focus:bg-transparent sm:text-nowrap"
                        onClick={fetchTagline}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                Generating...
                                <svg
                                    aria-hidden="true"
                                    className="fill-textBody text-background-light dark:text-background h-6 w-6 animate-spin"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            </>
                        ) : (
                            'Generate new tagline'
                        )}
                    </button>
                </div>
                <Image
                    src="/static/images/logo.png"
                    alt="koi fish logo"
                    className="absolute right-[10%] bottom-[10%] -z-1 h-auto w-64 opacity-20"
                    height={200}
                    width={200}
                />
            </div>
            <div className="divide-surface-light dark:divide-surface divide-y">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h2 className="text-textHeading-light-light dark:text-textHeading text-2xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h2>
                    <p className="dark:text-textBody text-textBody-light text-lg leading-7">
                        {siteMetadata.description}
                    </p>
                </div>
                <ul className="divide-surface-light dark:divide-surface divide-y">
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((post) => {
                        const { slug, date, title, summary, tags } = post;
                        return (
                            <li key={slug} className="py-12">
                                <article>
                                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="dark:text-textBody text-base leading-6 font-medium text-gray-500">
                                                <time dateTime={date}>
                                                    {formatDate(date, siteMetadata.locale)}
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-2xl leading-8 font-bold tracking-tight">
                                                        <Link
                                                            href={`/blog/${slug}`}
                                                            className="text-textHeading-light dark:text-textHeading"
                                                        >
                                                            {title}
                                                        </Link>
                                                    </h3>
                                                    <div className="flex flex-wrap">
                                                        {tags.map((tag) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="prose dark:text-textBody max-w-none text-gray-500">
                                                    {summary}
                                                </div>
                                            </div>
                                            <div className="text-base leading-6 font-medium">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-cedar hover:text-cedarHover dark:text-sky dark:hover:text-skyHover"
                                                    aria-label={`Read more: "${title}"`}
                                                >
                                                    Read more &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base leading-6 font-medium">
                    <Link
                        href="/blog"
                        className="text-textBody-light hover:text-textBodyHover-light dark:hover:text-textBodyHover dark:text-textBody"
                        aria-label="All posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}
        </>
    );
}
