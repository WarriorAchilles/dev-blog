import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import Main from './Main';
import Beams from '@/components/Beams';

export default async function Page() {
    const sortedPosts = sortPosts(allBlogs);
    const posts = allCoreContent(sortedPosts);
    return (
        <>
            {/* Fixed background beams that stay in place */}
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            >
                <Beams
                    beamHeight={30}
                    beamWidth={0.8}
                    beamNumber={26}
                    speed={1}
                    noiseIntensity={2}
                    scale={0.25}
                    rotation={228}
                    lightColor="#90a955"
                />
            </div>
            {/* Scrollable content layer */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Main posts={posts} />
            </div>
        </>
    );
}
