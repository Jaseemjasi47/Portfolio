import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative">
            <div className="container-custom">
                <SectionHeading title="Get In Touch" subtitle="Contact Me" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold font-heading">
                            Let's talk about your <span className="text-gradient">next project</span>
                        </h3>
                        <p className="text-[var(--color-text-secondary)] text-lg">
                            I'm available for freelance projects and full-time opportunities.
                            Let's build something amazing together.
                        </p>

                        <div className="space-y-6 mt-8">
                            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-sm text-[var(--color-text-secondary)]">Email</h4>
                                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="font-medium hover:text-[var(--color-accent)] transition-colors">
                                        {portfolioData.personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="text-sm text-[var(--color-text-secondary)]">Phone</h4>
                                    <a href={`tel:${portfolioData.personalInfo.phone}`} className="font-medium hover:text-[var(--color-accent)] transition-colors">
                                        {portfolioData.personalInfo.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 glass-panel p-4 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-sm text-[var(--color-text-secondary)]">Location</h4>
                                    <p className="font-medium">
                                        {portfolioData.personalInfo.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        action={`mailto:${portfolioData.personalInfo.email}`}
                        method="post"
                        encType="text/plain"
                        className="glass-panel p-8 rounded-2xl space-y-6 border-t-4 border-t-[var(--color-accent)]"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-secondary)]">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-secondary)]">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full justify-center" icon={<FaPaperPlane />}>
                            Send Message
                        </Button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
