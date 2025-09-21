import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

export default function CustomSelect({ options, value, onChange }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const selectedOption = options.find((o) => o.value === value);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node) &&
                !buttonRef.current?.contains(e.target as Node)
            ) {
                setIsOpen(false);
                setHighlightedIndex(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsOpen(true);
                setHighlightedIndex(0);
            }
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev === null || prev === options.length - 1 ? 0 : prev + 1
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prev) =>
                prev === null || prev === 0 ? options.length - 1 : prev - 1
            );
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (highlightedIndex !== null) {
                onChange(options[highlightedIndex].value);
                setIsOpen(false);
                setHighlightedIndex(null);
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setIsOpen(false);
            setHighlightedIndex(null);
        }
    };

    return (
        <div className="relative w-64">
            {/* Select Button */}
            <button
                ref={buttonRef}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setHighlightedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="glass3d flex w-full items-center justify-between rounded-full px-4 py-2 shadow-sm transition hover:border-gray-400"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <div className="text-textHeading flex w-full items-center justify-center">
                    {selectedOption
                        ? selectedOption.label
                        : 'Select which AI generates my tagline:'}
                    <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        ref={dropdownRef}
                        role="listbox"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="glass3d absolute z-10 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
                    >
                        {options.map((option, idx) => {
                            const isHighlighted = highlightedIndex === idx;
                            return (
                                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                                <li
                                    key={option.value}
                                    role="option"
                                    aria-selected={option.value === value}
                                    tabIndex={-1}
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                        setHighlightedIndex(null);
                                    }}
                                    onMouseEnter={() => setHighlightedIndex(idx)}
                                    className={`cursor-pointer px-4 py-2 transition ${
                                        option.value === value ? 'bg-surface font-medium' : ''
                                    } ${isHighlighted ? 'border-surface border' : ''}`}
                                >
                                    {option.label}
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}
