import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
    return (
        <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm"
            >
                {subtitle}
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mt-2 font-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`h-1 w-24 bg-[var(--color-accent)] mt-4 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
            />
        </div>
    );
}
