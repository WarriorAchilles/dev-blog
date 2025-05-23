import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import { formatDate } from 'pliny/utils/formatDate';

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
    return (
        <>
            <div className="container mb-2 flex h-[80vh] flex-col items-center justify-center">
                <h1 className="text-textHeading-light dark:text-textHeading text-3xl">
                    Zion Emond
                </h1>
                <p className="text-textBody-light dark:text-textBody mb-2">lorem ipsum sit dolor</p>
                <a
                    className="bg-koi hover:bg-koiHover dark:bg-matcha dark:hover:bg-matchaHover m-2 max-w-1/2 rounded-full p-2"
                    href="/portfolio"
                >
                    My projects
                </a>
                <Image
                    src="/static/images/logo.png"
                    alt="koi fish logo"
                    className="absolute right-100 bottom-25 h-auto w-64 opacity-20"
                    height={200}
                    width={200}
                />
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h2 className="text-textHeading-light-light dark:text-textHeading text-2xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h2>
                    <p className="dark:text-textBody text-lg leading-7 text-gray-500">
                        {siteMetadata.description}
                    </p>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
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
