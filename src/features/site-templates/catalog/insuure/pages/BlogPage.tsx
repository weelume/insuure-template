'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell, asset, href } from '../components/Shell';
import { Reveal } from '../components/Motion';
import records from '../content/pages.json';
import { articleTitles } from '../content/site';
export default function BlogPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="page-hero container"><Reveal><h1>{locale === 'zh' ? '保障知识与新鲜洞察' : 'News Inside'}</h1></Reveal><div className="blog-grid">{records.articles.map((article, i) => <Reveal className="blog-card" key={article.slug} delay={i % 2 * .13}><Link href={href(basePath, locale, article.slug)}><div className="blog-image"><img src={asset(article.image)} alt={articleTitles[i][locale]}/></div><p className="byline">{article.author} <span>{locale === 'zh' ? '2026 年 1 月 24 日' : 'Jan 24, 2026'}</span></p><h2>{articleTitles[i][locale]}</h2><span className="text-link">{locale === 'zh' ? '阅读全文' : 'Read More'}</span></Link></Reveal>)}</div></section></Shell>; }
