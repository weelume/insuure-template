'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { asset } from './Shell';
const videos = ['Ppiz1Un0Kl4ZaeEEm5VqTwRVIw.mp4', 'GdzsZSxPYgJUHw5zuSwmZmZiGM.mp4', '1RvqWNAGBSwjROJo7vwvUfkTXY4.mp4'];
const posters = ['ZN372JoxSirasIuf9URX3F6VEw.png', 'utZnTevQ9vLYkT9fcAXqKxhJmMI.png', 'jNOz48pzDZGOr6KEYeUGJNTp9zQ.jpg'];
export function TestimonialVideo({ index, active, locale, source, poster }: {
    index: number;
    active: boolean;
    locale: 'zh' | 'en';
    source?: string;
    poster?: string;
}) {
    const ref = useRef<HTMLVideoElement>(null), visible = useInView(ref, { amount: .2 }), reduce = useReducedMotion(), [error, setError] = useState(false);
    useEffect(() => {
        const video = ref.current;
        if (!video)
            return;
        if (active && visible && !reduce) {
            video.play().catch(() => { setError(true); });
        }
        else
            video.pause();
        return () => video.pause();
    }, [active, visible, reduce]);
    return <div className="testimonial-video"><video ref={ref} src={asset(source ?? videos[index])} poster={asset(poster ?? posters[index])} muted playsInline loop controls preload="metadata" onError={() => setError(true)} aria-label={locale === 'zh' ? '客户故事视频' : 'Customer story video'}/>{error && <p role="status">{locale === 'zh' ? '自动播放不可用，请使用视频播放控件。' : 'Autoplay is unavailable. Use the video playback controls.'}</p>}</div>;
}
