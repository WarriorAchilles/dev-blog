import Link from '@/components/Link';
import Tag from '@/components/Tag';
import TaglineGenerator from '@/components/TaglineGenerator';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import { formatDate } from 'pliny/utils/formatDate';

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
    return (
        <>
            <div className="container mb-3 flex h-[80vh] flex-col items-center justify-center">
                <div className="container flex w-full flex-col items-center justify-center pb-30">
                    <p className="text-textBody text-lg">
                        <span className="dark:text-matcha text-koi text-lg">Hi, </span>I'm
                    </p>
                    <h1 className="text-textHeading-light dark:text-textHeading mb-5 text-6xl">
                        Zion Emond
                    </h1>
                    <h2 className="text-textBody-light dark:text-textBody mb-8 text-3xl">
                        I write code and eat snacks.
                    </h2>
                    <p className="text-textBody-light dark:text-textBody mb-3 text-lg">
                        I’m a software engineer building things with TypeScript, React, and Node.js
                        (among other things). I focus on making web apps that are fast, functional,
                        and easy to use — both for the people running them and the people using
                        them.
                    </p>
                    <a
                        className="bg-koi hover:bg-background-light dark:bg-sky dark:hover:bg-background dark:hover:text-sky text-textBody-light dark:text-surface border-koi dark:border-sky m-2 max-w-1/2 rounded-full border-2 px-3 py-2 transition"
                        href="/portfolio"
                    >
                        My projects
                    </a>
                    <TaglineGenerator />
                </div>
                <Image
                    src="/static/images/logo.png"
                    alt="koi fish logo"
                    className="absolute right-[10%] bottom-[10%] h-auto w-64 opacity-20"
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
