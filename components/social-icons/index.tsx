import {
    Mail,
    Github,
    Facebook,
    Youtube,
    Linkedin,
    Twitter,
    X,
    Mastodon,
    Threads,
    Instagram,
    Medium,
    Bluesky,
} from './icons';

const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter,
    x: X,
    mastodon: Mastodon,
    threads: Threads,
    instagram: Instagram,
    medium: Medium,
    bluesky: Bluesky,
};

type SocialIconProps = {
    kind: keyof typeof components;
    href: string | undefined;
    size?: number;
};

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
    if (
        !href ||
        (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
    )
        return null;

    const SocialSvg = components[kind];

    return (
        <a
            className="text-textBody hover:text-textBodyHover text-sm transition"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
        >
            <span className="sr-only">{kind}</span>
            <SocialSvg
                className={`hover:text-textBodyHover-light dark:hover:text-textBodyHover text-textBody-light dark:text-textBody fill-current h-${size} w-${size}`}
            />
        </a>
    );
};

export default SocialIcon;
