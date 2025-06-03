import { useEffect, useRef } from 'react';

type TypewriterTextProps = {
    text: string;
};

export function TypewriterText({ text }: TypewriterTextProps) {
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            if (text) {
                el.classList.remove('typewriter'); // Reset animation
                void el.offsetWidth; // Force reflow
                el.classList.add('typewriter'); // Re-add animation
            } else {
                el.classList.remove('typewriter');
            }
        }
    }, [text]); // Re-run when `text` changes

    return (
        <p
            ref={ref}
            className="text-textBody-light dark:text-textBody typewriter mb-8 max-w-fit text-sm md:text-3xl"
        >
            {text}
        </p>
    );
}
