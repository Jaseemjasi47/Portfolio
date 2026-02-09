import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const roles = ["Full Stack Developer", "Python Django Expert", "React Specialist", "UI/UX Enthusiast"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), PAUSE_TIME);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? DELETING_SPEED : TYPING_SPEED);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[var(--color-bg-primary)] z-[-2]"></div>

            {/* Animated Gradients */}
            <motion.div
                style={{ y: y1, x: -100 }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"
            />
            <motion.div
                style={{ y: y2, x: 100 }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"
            />

            <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-2 mb-6 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium text-sm tracking-wide">
                        Available for Hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-purple-500">
                            {portfolioData.personalInfo.name}
                        </span>
                    </h1>

                    <div className="h-10 mb-8">
                        <span className="text-2xl md:text-3xl font-mono text-[var(--color-text-secondary)]">
                            I am a <span className="text-[var(--color-text-primary)] border-r-2 border-[var(--color-accent)] pr-2 animate-pulse">{text}</span>
                        </span>
                    </div>

                    <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        {portfolioData.personalInfo.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} icon={<FaArrowRight />}>
                            View Projects
                        </Button>
                        <a href="/public/cv.pdf" download>
                            <Button variant="outline" icon={<FaDownload />}>
                                Download CV
                            </Button>
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract Tech Visual */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full animate-spin-slow blur-3xl"></div>

                        {/* Floating Cards (Mockup) */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 z-20 glass-panel p-6 rounded-2xl w-64 transform rotate-6 border-l-4 border-l-[var(--color-accent)]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">⚛️</div>
                                <div>
                                    <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                                    <div className="h-2 w-12 bg-white/10 rounded"></div>
                                </div>
                            </div>
                            <div className="h-20 bg-white/5 rounded-lg w-full"></div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 left-0 z-10 glass-panel p-6 rounded-2xl w-64 transform -rotate-3 border-l-4 border-l-purple-500"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-white">Project Stats</span>
                                <span className="text-xs text-green-400">+124%</span>
                            </div>
                            <div className="flex gap-1 items-end h-16">
                                <div className="w-1/5 bg-purple-500/30 h-[40%] rounded-t"></div>
                                <div className="w-1/5 bg-purple-500/50 h-[70%] rounded-t"></div>
                                <div className="w-1/5 bg-purple-500/70 h-[50%] rounded-t"></div>
                                <div className="w-1/5 bg-purple-500 h-[80%] rounded-t"></div>
                                <div className="w-1/5 bg-[var(--color-accent)] h-[100%] rounded-t"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] text-sm flex flex-col items-center gap-2"
            >
                <span>Scroll Down</span>
                <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent"></div>
            </motion.div>

        </section>
    );
}
