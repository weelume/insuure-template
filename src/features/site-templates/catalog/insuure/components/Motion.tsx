'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import { motion, animate, useInView, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
export function Reveal({ children, className = '', delay = 0, direction = 'up' }: {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'left' | 'right' | 'scale';
}) {
    const reduce = useReducedMotion();
    const start = direction === 'scale' ? { scale: .92, opacity: 0 } : direction === 'left' ? { x: -16, opacity: 0 } : direction === 'right' ? { x: 16, opacity: 0 } : { y: 36, opacity: 0 };
    return <motion.div data-insuure-reveal className={className} initial={reduce ? false : start} whileInView={{ x: 0, y: 0, opacity: 1, scale: 1 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .7, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function Counter({ value, suffix }: {
    value: number;
    suffix: string;
}) {
    const ref = useRef<HTMLSpanElement>(null), inView = useInView(ref, { once: true }), number = useMotionValue(0), display = useTransform(number, n => Math.round(n).toLocaleString()), reduce = useReducedMotion();
    useEffect(() => {
        if (!inView)
            return;
        const controls = animate(number, value, { duration: reduce ? 0 : 1.8, ease: 'easeOut' });
        return () => controls.stop();
    }, [inView, number, value, reduce]);
    return <span ref={ref}><motion.span>{display}</motion.span>{suffix}</span>;
}
