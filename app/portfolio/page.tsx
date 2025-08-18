import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { genPageMetadata } from 'app/seo';
import MagicBento from '@/components/MagicBento';
import Beams from '@/components/Beams';

export const metadata = genPageMetadata({ title: 'Projects' });

export default function Projects() {
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
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pt-12 pb-8 md:space-y-5">
                    <h1 className="text-textHeading-light dark:text-textHeading text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Portfolio
                    </h1>
                    <p className="dark:text-textBody text-lg leading-7 text-gray-500">
                        A list of my personal projects, some contracted work, and fun little
                        experiments.
                    </p>
                </div>
                <div className="container py-12">
                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                    />
                    <div className="-m-4 flex flex-wrap sm:justify-center md:justify-start">
                        {projectsData.map((d) => (
                            <Card
                                key={d.title}
                                title={d.title}
                                description={d.description}
                                imgSrc={d.imgSrc}
                                href={d.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
