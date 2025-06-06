import Link from 'next/link';
import { slug } from 'github-slugger';
interface Props {
    text: string;
}

const Tag = ({ text }: Props) => {
    return (
        <Link
            href={`/tags/${slug(text)}`}
            className="text-koi hover:text-koiHover dark:text-matcha dark:hover:text-matchaHover mr-3 text-sm font-medium uppercase"
        >
            {text.split(' ').join('-')}
        </Link>
    );
};

export default Tag;
