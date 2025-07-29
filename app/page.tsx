import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs } from 'contentlayer/generated';
import Main from './Main';
import Beams from '@/components/Beams';

export default async function Page() {
    const sortedPosts = sortPosts(allBlogs);
    const posts = allCoreContent(sortedPosts);
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '80vh',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    zIndex: -999,
                }}
            >
                <Beams
                    beamHeight={30}
                    beamWidth={0.5}
                    beamNumber={26}
                    speed={2}
                    noiseIntensity={2}
                    scale={0.2}
                    rotation={228}
                    lightColor="#90a955"
                />
            </div>
            <Main posts={posts} />
        </>
    );
}
