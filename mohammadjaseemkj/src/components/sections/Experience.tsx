import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';
import { fadeInUp } from '../../utils/animations';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container-custom">
                <SectionHeading title="Work Experience" subtitle="My Journey" />

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-accent)] to-transparent md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {portfolioData.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-3 h-3 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)] md:-translate-x-1.5 z-10"></div>

                                {/* Content */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 pl-8' : 'md:pr-12 pl-8'}`}>
                                    <div className="glass-panel p-6 rounded-xl relative hover:-translate-y-1 transition-transform duration-300 border-l-4 border-l-[var(--color-accent)]">
                                        <span className="absolute -top-3 -right-3 px-3 py-1 bg-[var(--color-accent)] text-xs font-bold rounded-full text-white">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-[var(--color-accent)] font-medium mb-4">{exp.company}</h4>
                                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for Grid alignment */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
