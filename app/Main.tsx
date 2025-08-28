import Homepage from '@/components/Homepage';
import { coreContent } from 'pliny/utils/contentlayer';
import { Authors, allAuthors } from 'contentlayer/generated';

export default function Home({ posts }) {
    const author = allAuthors.find((p) => p.slug === 'default') as Authors;
    const mainContent = coreContent(author);
    return (
        <>
            <Homepage posts={posts} content={mainContent} />
        </>
    );
}
