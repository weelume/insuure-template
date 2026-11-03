'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export function Dialog({ label, close, children }: {
    label: string;
    close: () => void;
    children: ReactNode;
}) {
    const ref = useRef<HTMLDialogElement>(null);
    useEffect(() => { const dialog = ref.current, overflow = document.body.style.overflow; dialog?.showModal(); document.body.style.overflow = 'hidden'; return () => { dialog?.close(); document.body.style.overflow = overflow; }; }, []);
    return <dialog ref={ref} className="insuure-dialog" aria-label={label} onCancel={close} onClick={event => {
            if (event.target === event.currentTarget)
                close();
        }}><button className="dialog-close" onClick={close} aria-label={label}>×</button>{children}</dialog>;
}
