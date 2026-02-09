import { FaHeart } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-[var(--color-bg-secondary)] relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-[var(--color-accent)] opacity-20 blur-[100px]"></div>

            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2">Jaseem<span className="text-[var(--color-accent)]">.dev</span></h3>
                        <p className="text-[var(--color-text-secondary)]">Building digital experiences that matter.</p>
                    </div>

                    <div className="flex gap-6">
                        {portfolioData.personalInfo.social.map((social) => {
                            const Icon = social.icon as React.ElementType;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors hover:scale-110 transform duration-200"
                                    aria-label={social.name}
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-secondary)]">
                    <p>© {new Date().getFullYear()} Mohammad Jaseem K J. All rights reserved.</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
