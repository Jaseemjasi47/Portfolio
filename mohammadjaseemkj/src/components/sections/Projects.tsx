import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

const categories = new Set<string>(['All']);
portfolioData.projects.forEach(project => {
    project.techStack.forEach(tech => categories.add(tech));
});
const allCategories = Array.from(categories);

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const filteredProjects = portfolioData.projects.filter(project =>
        filter === 'All' || project.techStack.includes(filter)
    );

    return (
        <section id="projects" className="py-20 bg-[var(--color-bg-secondary)] relative">
            {/* Background blob */}
            <div className="absolute top-0 right-0 max-w-[600px] max-h-[600px] w-full h-full bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container-custom">
                <SectionHeading title="Featured Projects" subtitle="My Work" />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {allCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                ? 'bg-[var(--color-accent)] text-white shadow-lg'
                                : 'bg-white/5 text-[var(--color-text-secondary)] hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors"
                            >
                                {/* Project Image Placeholder (Gradient for now) */}
                                <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                    <div className="text-6xl opacity-20 transform -rotate-12">
                                        {project.id % 2 === 0 ? '🚀' : '💻'}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent opacity-90 translate-y-24 group-hover:translate-y-0 transition-transform duration-300 p-6 flex flex-col justify-end">

                                    <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <span className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-wider mb-2 block">
                                            {project.techStack.join(' • ')}
                                        </span>
                                        <h3 className="text-2xl font-bold font-heading mb-2 text-white">{project.title}</h3>
                                        <p className="text-[var(--color-text-secondary)] line-clamp-3 text-sm mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pb-2">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="outline" icon={<FaGithub />}>Code</Button>
                                        </a>
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant="primary" icon={<FaExternalLinkAlt />}>Demo</Button>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
