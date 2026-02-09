import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { slideInFromLeft, slideInFromRight } from '../../utils/animations';

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container-custom">
                <SectionHeading title="About Me" subtitle="My Story" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image / Visual */}
                    <motion.div
                        variants={slideInFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden glass-panel p-2">
                            <img
                                src="/assets/profile.jpg"
                                alt="Profile"
                                className="w-full h-auto rounded-xl filter grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
                            />
                        </div>
                        {/* Background decoration */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-[var(--color-accent)] rounded-2xl z-0 transform -rotate-3 opacity-50"></div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={slideInFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold font-heading">
                            A passionate <span className="text-gradient">Full Stack Developer</span> from India.
                        </h3>

                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            {portfolioData.personalInfo.description}
                        </p>

                        <p className="text-[var(--color-text-secondary)] leading-relaxed">
                            With over 1.5+ years of experience in building scalable web applications, I specialize in the Python Django ecosystem and modern React frontends. My journey involves solving real-world problems through code, optimizing performance, and crafting intuitive user interfaces.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-white/5 text-center">
                                <span className="block text-3xl font-bold text-[var(--color-accent)] mb-1">1.5+</span>
                                <span className="text-sm text-[var(--color-text-secondary)]">Years Experience</span>
                            </div>
                            <div className="p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-white/5 text-center">
                                <span className="block text-3xl font-bold text-[var(--color-accent)] mb-1">{portfolioData.projects.length}+</span>
                                <span className="text-sm text-[var(--color-text-secondary)]">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
