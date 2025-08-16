'use client';

import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import { formatDate } from 'pliny/utils/formatDate';
import { useState, useEffect } from 'react';
import TextType from './TextType';
import GlareHover from './GlareHover';
import ScrollReveal from './ScrollReveal';

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
            <div className="container mt-[100px] mb-3 flex h-[80vh] flex-col items-center justify-center sm:mt-0">
                <div className="container flex w-full flex-col items-center justify-center md:mt-45">
                    <p className="text-textBody text-lg">
                        <span className="dark:text-matcha text-koi text-lg">Hi, </span>I'm
                    </p>
                    <h1 className="text-textHeading-light dark:text-textHeading mb-5 text-5xl md:text-6xl">
                        Zion Emond
                    </h1>
                    {loading ? (
                        <div className="text-textBody-light dark:text-textBody mb-8 flex max-w-fit flex-row items-center justify-evenly gap-3 text-sm md:text-3xl">
                            Generating tagline...
                            <svg
                                aria-hidden="true"
                                className="fill-textBody text-surface h-6 w-6 animate-spin"
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
                        <TextType
                            className="text-textBody-light dark:text-textBody mb-8 max-w-fit text-sm md:text-3xl"
                            text={tagline}
                            typingSpeed={45}
                            pauseDuration={5000}
                            variableSpeed={{ min: 40, max: 90 }}
                        />
                    )}
                    <div
                        className="mb-4 flex flex-col items-center justify-center gap-5 md:flex-row"
                        style={{ zIndex: 1 }}
                    >
                        <a
                            className="text-textHeading glass3d rounded-full text-nowrap"
                            href="/portfolio"
                            aria-label="my projects"
                        >
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-30}
                                glareSize={300}
                                transitionDuration={800}
                                playOnce={false}
                                width="100%"
                                height="100%"
                                background="transparent"
                                borderRadius="calc(infinity * 1px)"
                                borderColor="transparent"
                                className="px-7 py-3"
                            >
                                My projects
                            </GlareHover>
                        </a>
                        <button
                            className="text-textHeading glass3d flex rounded-full text-nowrap"
                            onClick={fetchTagline}
                            disabled={loading}
                            aria-label={loading ? 'Generating...' : 'Generate new tagline'}
                        >
                            <GlareHover
                                glareColor="#ffffff"
                                glareOpacity={0.3}
                                glareAngle={-30}
                                glareSize={300}
                                transitionDuration={800}
                                playOnce={false}
                                width="100%"
                                height="100%"
                                background="transparent"
                                borderRadius="calc(infinity * 1px)"
                                borderColor="transparent"
                                className="flex gap-3 px-7 py-3 text-nowrap"
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
                            </GlareHover>
                        </button>
                    </div>
                </div>
                <div className="container mt-20 md:mt-45">
                    <p className="dark:text-textBody text-sm md:max-w-1/2">
                        *I totally wrote this tagline myself and totally didn't ask ChatGPT to
                        generate it. That being said, if you want to ask ChatGPT to generate a new
                        tagline, click the button. (Everything the AI tagline says about me may or
                        may not be true.)
                    </p>
                </div>
            </div>
            <div className="container my-30">
                <ScrollReveal
                    enableBlur={true}
                    baseOpacity={0.1}
                    baseRotation={3}
                    textClassName="text-textBody text-1xl sm:text-2xl md:text-4xl text-center"
                    wordAnimationEnd="bottom bottom"
                >
                    I'm a software engineer building things with TypeScript, React, and Node.js
                    (among other things). I focus on making software from top to bottom that is
                    fast, functional, and easy to use - both for the people running it and the
                    people using it.
                </ScrollReveal>
                <Image
                    src="/static/images/logo.png"
                    alt=""
                    className="absolute top-[85vh] right-[25%] -z-1 h-auto w-50 opacity-20 md:right-0 md:w-64"
                    height={200}
                    width={200}
                    aria-hidden="true"
                />
            </div>
            <div className="divide-surface-light dark:divide-surface container divide-y">
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
