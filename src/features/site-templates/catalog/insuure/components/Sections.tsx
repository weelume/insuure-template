'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { faq, planNames, planPricing, quotes, steps } from '../content/site';
import type { SiteTemplatePageProps } from '../../../types';
import { asset, href } from './Shell';
import { Counter, Reveal } from './Motion';
import { TestimonialVideo } from './TestimonialVideo';
import { Dialog } from './Dialog';
export function IntroVideo({ locale = 'zh' }: Pick<SiteTemplatePageProps, 'locale'>) {
    const [open, setOpen] = useState(false);
    return <><button className="button secondary" onClick={() => setOpen(true)}><span aria-hidden="true">▷</span> {locale === 'zh' ? '播放介绍视频' : 'Play Intro Video'}</button>{open && <Dialog close={() => setOpen(false)} label={locale === 'zh' ? '关闭介绍视频' : 'Close introduction video'}><iframe className="intro-frame" src="https://www.youtube-nocookie.com/embed/8AHPXm9Y6mI?autoplay=1&rel=0" title={locale === 'zh' ? '保险服务介绍' : 'Insurance introduction'} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/><p className="form-note">{locale === 'zh' ? '原站介绍视频由 YouTube 提供，需要网络连接。' : 'The original introduction video is hosted on YouTube and requires an internet connection.'}</p></Dialog>}</>;
}
export function Process({ locale = 'zh', service = false }: Pick<SiteTemplatePageProps, 'locale'> & {
    service?: boolean;
}) {
    return <section className="section container"><Reveal><h2 className="center">{locale === 'zh' ? (service ? '保障服务如何运作' : '我们如何为您提供保障') : (service ? 'How Our Service Works' : 'How Insure Works for You')}</h2></Reveal><div className="grid three">{steps.map(([title, body], i) => <Reveal className={'process glass process-' + i} key={title.en} delay={i * .12}><span className="step-number">0{i + 1}</span><h3>{title[locale]}</h3><p>{body[locale]}</p></Reveal>)}</div></section>;
}
export function Stats({ locale = 'zh' }: Pick<SiteTemplatePageProps, 'locale'>) {
    return <section className="stats container"><Reveal className="stat-cell"><strong><Counter value={3} suffix="M+"/></strong><p>{locale === 'zh' ? '客户获得保障' : 'Customers protected'}</p></Reveal><Reveal className="stat-cell" delay={.1}><strong><Counter value={25} suffix="+"/></strong><p>{locale === 'zh' ? '年值得信赖的服务' : 'Years of trusted service'}</p></Reveal><Reveal className="stat-cell" delay={.2}><strong><Counter value={98} suffix="%"/></strong><p>{locale === 'zh' ? '理赔满意度' : 'Claim satisfaction'}</p></Reveal><Reveal className="stat-quote" delay={.3}><p>{locale === 'zh' ? '简单、透明、轻松的过程，让我知道未来有人守护。' : 'The process was simple, transparent, and stress-free. I feel confident knowing my future is protected.'}</p><small>Alxgeder M. · {locale === 'zh' ? '已验证客户' : 'Verified Customer'}</small></Reveal></section>;
}
export function Pricing({ locale = 'zh', basePath }: SiteTemplatePageProps) {
    const [yearly, setYearly] = useState(false);
    return <section className="section pricing"><div className="container"><Reveal className="split-head"><h2>{locale === 'zh' ? <>从今天到明天<br />保障始终相伴</> : <>Seamless Coverage From<br />Today to Your Tomorrow</>}</h2><p>★★★★★ 4.9+<br />{locale === 'zh' ? '生活在变，保障始终贴合您的需要。' : 'Your coverage adapts as your life changes, protecting what matters most.'}</p></Reveal><div className="billing" aria-label={locale === 'zh' ? '付款周期' : 'Billing period'}><button aria-pressed={!yearly} onClick={() => setYearly(false)}>{locale === 'zh' ? '按月' : 'Monthly'}</button><button aria-pressed={yearly} onClick={() => setYearly(true)}>{locale === 'zh' ? '按年' : 'Yearly'}</button></div><div className="grid three">{planPricing.map((pricing, i) => <Reveal className="plan glass" delay={i * .12} key={pricing.monthly}><img src={asset(['MXeSPH04Dl6DGwZjWccIF3dGU.svg', 'zO3rxRVKZACWVy4TZ6ccKOkxLY.svg', 'jxl1Z47gSwu7ttmLFbbnqSXXck0.svg'][i])} alt=""/><p>{locale === 'zh' ? '起价' : 'From'}</p><strong className="price" aria-live="polite">$ {yearly ? pricing.yearlyMonthly : pricing.monthly}</strong><span> / {locale === 'zh' ? '月' : 'Month'}</span><h3>{planNames[i][locale]}</h3><p>{locale === 'zh' ? ['为人生意外与责任风险，提供稳妥支持。', '守护您与家人的生活、财产和每份安心。', '为长远规划与未来需求，建立全面保障。'][i] : ['Protects you against claims arising from accidents or damage to others.', 'Safeguards your personal belongings at home or on the go.', 'Covers legal costs and provides support in case of disputes or claims.'][i]}</p><Link className="button" href={href(basePath, locale, 'contact')}>{locale === 'zh' ? '了解方案' : 'Learn More'}</Link></Reveal>)}</div></div></section>;
}
export function FAQ({ locale = 'zh', basePath }: SiteTemplatePageProps) {
    const [active, setActive] = useState<number | null>(0), reduce = useReducedMotion();
    return <section className="section container"><Reveal><h2 className="center">{locale === 'zh' ? '您关心的问题' : 'Answers to Important Questions'}</h2></Reveal><div className="faq-layout"><Reveal className="faq-help"><h3>{locale === 'zh' ? '随时准备，为您解答' : 'We’re Ready When You Are.'}</h3><p>{locale === 'zh' ? '清晰的建议，及时的支持。' : 'Simple help, clear guidance, right when it matters.'}</p><Link className="button" href={href(basePath, locale, 'contact')}>{locale === 'zh' ? '在线咨询' : 'Live Chat'}</Link></Reveal><div>{faq.map(([question, answer], i) => <div className="faq-item" key={question.en}><h3><button onClick={() => setActive(active === i ? null : i)} aria-expanded={active === i} aria-controls={'insuure-answer-' + i}>{question[locale]}<motion.span animate={{ rotate: active === i ? 45 : 0 }} aria-hidden="true">+</motion.span></button></h3><AnimatePresence initial={false}>{active === i && <motion.div id={'insuure-answer-' + i} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : .32, ease: [.22, 1, .36, 1] }}><p>{answer[locale]}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}
export function Testimonials({ locale = 'zh' }: Pick<SiteTemplatePageProps, 'locale'>) {
    const [index, setIndex] = useState(0), [paused, setPaused] = useState(false), reduce = useReducedMotion(), ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (paused || reduce || quotes.length < 2)
            return;
        const timer = setInterval(() => {
            if (!document.hidden)
                setIndex(i => (i + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [paused, reduce]);
    return <section className="section testimonials"><div className="container"><Reveal><h2>{locale === 'zh' ? '真实故事，来自我们守护的人' : 'Real Stories from People We Protect'}</h2></Reveal><div ref={ref} className="testimonial-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget))
                setPaused(false);
        }}><motion.div className="testimonial-track" animate={{ x: `-${index * 100}%` }} transition={{ type: 'spring', stiffness: 95, damping: 22 }} drag={reduce ? false : 'x'} dragConstraints={{ left: 0, right: 0 }} dragElastic={.12} onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 45)
                setIndex(i => (i + (info.offset.x < 0 ? 1 : quotes.length - 1)) % quotes.length);
        }}>{quotes.map((quote, i) => <article className="testimonial glass" key={quote.name}><img src={asset('TMKp7YEFWcoKKXtYJBgimg9U2k.svg')} alt=""/><TestimonialVideo index={i} active={index === i && !paused} locale={locale}/><blockquote>{quote.quote[locale]}</blockquote><p>{quote.name}</p><span aria-label={locale === 'zh' ? '五星评价' : 'Five star rating'}>★★★★★</span></article>)}</motion.div></div><div className="carousel-controls"><button onClick={() => setIndex(i => (i + quotes.length - 1) % quotes.length)} aria-label={locale === 'zh' ? '上一条评价' : 'Previous testimonial'}>←</button><span aria-live="polite">{index + 1} / {quotes.length}</span><button onClick={() => setIndex(i => (i + 1) % quotes.length)} aria-label={locale === 'zh' ? '下一条评价' : 'Next testimonial'}>→</button><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? (locale === 'zh' ? '继续' : 'Resume') : (locale === 'zh' ? '暂停' : 'Pause')}</button></div><p className="center">{locale === 'zh' ? '已成为 900 多家企业的员工福利选择' : "We're an employee benefit at 900+ companies"}</p><div className="partner-logos">{['zBYoiKo6WqvxelUwAaESIhUjw.svg', '1cNRPlZTLICB3wwEf8w3nw9G9A.svg', 'NL6e4KGuIm1oybvfutK8wvbxU.svg', 'UBSh61St281yg2i86XyHxSILik.svg', '2NOYEqdazUckoUCVzUu5yFdZQU.svg'].map((name, i) => <img key={name} src={asset(name)} alt={locale === 'zh' ? '合作企业 ' + (i + 1) : 'Partner company ' + (i + 1)}/>)}</div></div></section>;
}
export function Protection({ locale = 'zh', basePath, secure = false }: SiteTemplatePageProps & {
    secure?: boolean;
}) { return <section className="section container protection"><Reveal direction="left"><img src={asset('oUsxjC0SD0iFcWb3KdqBmdIn5Y.svg')} alt={locale === 'zh' ? '在伞下得到守护的家人' : 'Family protected beneath an umbrella'}/></Reveal><Reveal direction="right"><h2>{secure ? (locale === 'zh' ? <>让每一份在意<br />都有周全保障</> : <>Keep what matters safe<br />and fully covered</>) : (locale === 'zh' ? <>生活在变<br />保障紧紧相随</> : <>Your Life Changes.<br />Your Coverage Keeps Up.</>)}</h2><p>{locale === 'zh' ? '生活不断向前，保障也随之调整。每个人生阶段，都有灵活、贴合需要的可靠支持。' : 'Your life evolves, and your coverage evolves with it staying flexible, relevant, and reliable at every stage.'}</p><ul>{(locale === 'zh' ? ['找到适合自己的方案', '让保险清晰简单', '理赔时始终有人支持', '随着生活变化调整保障'] : ['Guides you to the right plan', 'Keeps things simple', 'Supports you at claim time', 'Adapts coverage as you grow']).map(item => <li key={item}>{item}</li>)}</ul><Link className="button" href={href(basePath, locale, 'contact')}>{locale === 'zh' ? '获取保障建议' : 'Get a Quote'}</Link></Reveal></section>; }
