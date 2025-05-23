import Image from './Image';
import Link from './Link';

const Card = ({ title, description, imgSrc, href }) => (
    <div className="md max-w-[544px] p-4 md:w-1/2">
        <div
            className={`${
                imgSrc && 'h-full'
            } border-border-light dark:border-border overflow-hidden rounded-md border-2`}
        >
            {imgSrc &&
                (href ? (
                    <Link href={href} aria-label={`Link to ${title}`}>
                        <Image
                            alt={title}
                            src={imgSrc}
                            className="object-cover object-center md:h-36 lg:h-48"
                            width={544}
                            height={306}
                        />
                    </Link>
                ) : (
                    <Image
                        alt={title}
                        src={imgSrc}
                        className="object-cover object-center md:h-36 lg:h-48"
                        width={544}
                        height={306}
                    />
                ))}
            <div className="p-6">
                <h2 className="text-textHeading-light dark:text-textHeading mb-3 text-2xl leading-8 font-bold tracking-tight">
                    {href ? (
                        <Link href={href} aria-label={`Link to ${title}`}>
                            {title}
                        </Link>
                    ) : (
                        title
                    )}
                </h2>
                <p className="prose dark:text-textBody text-textBody-light mb-3 max-w-none">
                    {description}
                </p>
                {href && (
                    <Link
                        href={href}
                        className="text-koi hover:text-koiHover dark:hover:text-skyHover dark:text-sky text-base leading-6 font-medium"
                        aria-label={`Link to ${title}`}
                    >
                        Learn more &rarr;
                    </Link>
                )}
            </div>
        </div>
    </div>
);

export default Card;
