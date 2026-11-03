'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell, asset, href } from '../components/Shell';
import { Reveal } from '../components/Motion';
import records from '../content/pages.json';
import { articleTitles, articleIntro, articleBody } from '../content/site';
export default function ArticlePage({ locale = 'zh', basePath, index }: SiteTemplatePageProps & {
    index: number;
}) { const article = records.articles[index]; return <Shell locale={locale} basePath={basePath}><article className="article container"><Reveal className="article-heading"><p className="byline">{article.author} · {locale === 'zh' ? '2026 年 1 月 24 日' : 'January 24, 2026'}</p><h1>{articleTitles[index][locale]}</h1><img className="article-cover" src={asset(article.image)} alt={articleTitles[index][locale]}/></Reveal><div className="article-body"><Reveal><p className="lead">{articleIntro[index][locale]}</p></Reveal>{articleBody.map(section => <Reveal key={section.title.en}><h2>{section.title[locale]}</h2><p>{section.body[locale]}</p></Reveal>)}<Link className="text-link" href={href(basePath, locale, 'blog')}>{locale === 'zh' ? '返回保险知识' : 'Back To Blog'}</Link></div></article></Shell>; }
