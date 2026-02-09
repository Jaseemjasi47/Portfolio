import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[var(--color-bg-secondary)] relative">
            <div className="container-custom">
                <SectionHeading title="Tech Stack" subtitle="My Arsenal" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.skills.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-panel p-8 rounded-2xl hover:border-[var(--color-accent)]/50 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center border-b border-white/10 pb-4">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill) => {
                                    const Icon = skill.icon as React.ElementType;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={fadeInUp}
                                            className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                        >
                                            <div
                                                className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                                style={{ color: skill.color }}
                                            >
                                                <Icon />
                                            </div>
                                            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
