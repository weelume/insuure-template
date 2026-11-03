'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { brand } from '../config/brand';
import { nav, text } from '../content/site';
import { useTemplateHost } from '../host';
import type { SiteTemplatePageProps } from '../../../types';
import { Dialog } from './Dialog';
import { Reveal } from './Motion';
import '../tokens.css';
import '../theme.css';
export const asset = (name: string) => '/templates/insuure/media/' + name;
export const href = (basePath: string, locale: 'zh' | 'en', slug = '') => (basePath + (locale === 'en' ? '/en' : '') + (slug ? '/' + slug : '')) || '/';
export function LocalForm({ locale = 'zh', newsletter = false }: {
    locale?: 'zh' | 'en';
    newsletter?: boolean;
}) {
    const [done, setDone] = useState(false);
    const label = (zh: string, en: string) => locale === 'zh' ? zh : en;
    return <form className={newsletter ? 'newsletter' : 'quote-form'} onSubmit={event => { event.preventDefault(); setDone(true); }}>
 {!newsletter && <><label>{label('姓名', 'Full Name')}<input name="name" autoComplete="name" required maxLength={100}/></label></>}
 <label>{newsletter ? label('订阅电子简报', 'Subscribe to Our Newsletter') : label('电子邮箱', 'Email')}<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" maxLength={200}/></label>
 {!newsletter && <><label>{label('联系电话', 'Phone')}<input name="phone" type="tel" autoComplete="tel" required minLength={6} maxLength={30}/></label><label>{label('保险类型', 'Insurance')}<select name="insurance" required defaultValue=""><option value="" disabled>{label('请选择', 'Choose a plan')}</option>{[text('人寿保险', 'Life Insurance'), text('健康保险', 'Health Insurance'), text('机动车保险', 'Motor Insurance'), text('财产保险', 'Property Insurance'), text('企业保险', 'Business Insurance')].map(item => <option key={item.en}>{item[locale]}</option>)}</select></label><label className="full">{label('留言', 'Message')}<textarea name="message" rows={5} required maxLength={3000}/></label></>}
 <button className="button" type="submit">{newsletter ? label('订阅', 'Subscribe') : label('提交咨询', 'Submit Request')}</button>
 <p className="form-note full" role="status">{done ? label('本地校验通过；尚未发送或保存任何信息。', 'Local validation passed. No information has been sent or saved.') : label('演示表单：仅作本地校验，不发送或保存信息。', 'Demo form: local validation only. No information is sent or saved.')}</p>
 </form>;
}
export function Shell({ locale = 'zh', basePath, children, theme = 'light' }: SiteTemplatePageProps & {
    children: ReactNode;
    theme?: 'light' | 'green' | 'yellow';
}) {
    const host = useTemplateHost(), [menu, setMenu] = useState(false), pathname = usePathname(), router = useRouter();
    const name = host.brandName?.[locale] ?? brand.name[locale], logo = theme === 'green' ? (host.lightLogoSrc ?? asset('gVMjxUjKt2BvOoZZ9MP6IMgDjw.svg')) : (host.logoSrc ?? asset('0fsdWdhT5WimSBiKDyZ3NdL4q80.svg'));
    const root = href(basePath, locale), links = nav.map(([slug, zh, en]) => ({ url: href(basePath, locale, slug), title: locale === 'zh' ? zh : en }));
    const nextLocale = locale === 'en' ? 'zh' : 'en', relative = pathname.slice(basePath.length).replace(/^\/en(?=\/|$)/, '').replace(/^\//, '');
    const languagePath = href(basePath, nextLocale, relative);
    useEffect(() => {
        const before = document.documentElement.getAttribute('data-template');
        document.documentElement.setAttribute('data-template', 'insuure');
        return () => {
            if (before)
                document.documentElement.setAttribute('data-template', before);
            else
                document.documentElement.removeAttribute('data-template');
        };
    }, []);
    const languageClick = (event: React.MouseEvent<HTMLAnchorElement>) => { event.preventDefault(); setMenu(false); router.push(languagePath + window.location.search + window.location.hash); };
    return <MotionConfig reducedMotion="user"><div className={'insuure theme-' + theme} lang={locale === 'zh' ? 'zh-CN' : 'en'}>
 <header className="site-header"><Link className="brand" href={root} aria-label={name}><img src={logo} alt=""/>{host.brandName && <span>{name}</span>}</Link><nav className="desktop-nav" aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{links.slice(0, 2).map(link => <Link key={link.url} href={link.url} aria-current={pathname === link.url ? 'page' : undefined}>{link.title}</Link>)}<details className="nav-pages"><summary>{locale === 'zh' ? '更多页面' : 'Pages'}</summary><div>{links.slice(2).map(link => <Link key={link.url} href={link.url}>{link.title}</Link>)}<Link href={href(basePath, locale, 'legal/privacy-policy')}>{locale === 'zh' ? '隐私政策' : 'Privacy Policy'}</Link></div></details><Link href={links[4].url}>{links[4].title}</Link></nav><div className="nav-actions"><Link className="language" href={languagePath} onClick={languageClick} aria-label={locale === 'zh' ? '切换到英文' : 'Switch to Chinese'}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="button nav-quote" href={links[4].url}>{locale === 'zh' ? '获取保障方案' : 'Get a Plan'}</Link><button className="menu-button" onClick={() => setMenu(true)} aria-label={locale === 'zh' ? '打开菜单' : 'Open menu'} aria-expanded={menu}><span /><span /></button></div></header>
 {menu && <Dialog close={() => setMenu(false)} label={locale === 'zh' ? '关闭导航菜单' : 'Close navigation menu'}><nav className="mobile-nav">{links.map(link => <Link key={link.url} href={link.url} onClick={() => setMenu(false)}>{link.title}</Link>)}<Link href={languagePath} onClick={languageClick}>{locale === 'zh' ? 'English' : '中文'}</Link></nav></Dialog>}
 <main>{children}</main><footer className="site-footer"><Reveal className="footer-cta"><h2>{locale === 'zh' ? <>因为您的未来<br />值得安心守护</> : <>Because Your Future<br />Deserves Security</>}</h2><p>{locale === 'zh' ? '清晰、便捷、可靠的保障，从今天开始。' : 'Secure your future today with clear, fast, and dependable coverage.'}</p><Link className="button" href={links[4].url}>{locale === 'zh' ? '立即了解保障' : 'Get Covered Now'}</Link></Reveal><div className="footer-links">{links.slice(1).map(link => <Link key={link.url} href={link.url}>{link.title}</Link>)}</div><div className="footer-grid"><div><Link className="footer-brand" href={root}>{name}</Link><p>{locale === 'zh' ? '让每一份在意，都有安心依靠' : 'Protection for everything that matters'}</p><p>{brand.phone}<br />{brand.email}<br />{brand.address[locale]}</p></div><LocalForm locale={locale} newsletter/></div><div className="footer-bottom"><span>© {brand.year} {name}</span><Link href={href(basePath, locale, 'legal/privacy-policy')}>{locale === 'zh' ? '隐私政策' : 'Privacy Policy'}</Link>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div></footer>
 {host.marketplaceHref && <Link className="marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}><img src={host.lightLogoSrc ?? logo} alt=""/><span>{name}</span></Link>}
 </div></MotionConfig>;
}
