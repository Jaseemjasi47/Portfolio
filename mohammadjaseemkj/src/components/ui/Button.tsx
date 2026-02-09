import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    children,
    icon,
    className,
    ...props
}: ButtonProps) {

    const variants = {
        primary: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/20 border-none',
        secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-opacity-80 border border-white/10',
        outline: 'bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
        ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 border-none'
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
            {icon && <span className="text-xl">{icon}</span>}
        </motion.button>
    );
}
