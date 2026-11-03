'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell, asset, href } from '../components/Shell';
import { Reveal } from '../components/Motion';
export default function NotFoundPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="page-hero container not-found"><Reveal><img src={asset('GtE2OfPjZ1c8gsW4XLjBd4CAiZY.png')} alt="404"/><h1>{locale === 'zh' ? '这里暂时没有您要找的页面' : 'Uh-oh! Something went wrong'}</h1><p>{locale === 'zh' ? '您可以返回首页，继续了解保障方案。' : 'Oops! We can’t find the page you’re looking for.'}</p><Link className="button" href={href(basePath, locale)}>{locale === 'zh' ? '返回首页' : 'Back to Home'}</Link></Reveal></section></Shell>; }
