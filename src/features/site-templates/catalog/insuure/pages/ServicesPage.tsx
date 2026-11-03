'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell, asset, href } from '../components/Shell';
import { Reveal } from '../components/Motion';
import { Process, Protection } from '../components/Sections';
import { serviceNames, serviceDescriptions, serviceSlugs } from '../content/site';
export default function ServicesPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <Shell locale={locale} basePath={basePath}><section className="page-hero container"><Reveal><h1>{locale === 'zh' ? <>人生每个阶段<br />都有智慧保障</> : <>Smart Protection for<br />Every Stage of Life</>}</h1></Reveal><div className="services-grid">{serviceNames.map((title, i) => <Reveal className="service-card" delay={i % 3 * .12} key={title.en}><Link href={href(basePath, locale, 'service/' + serviceSlugs[i])}><h2>{title[locale]}</h2><p>{serviceDescriptions[i][locale]}</p><div className="service-art"><img src={asset(['MXeSPH04Dl6DGwZjWccIF3dGU.svg', 'h6kzZH0mRx7FaemkTPlNe02GyY.svg', 'f3tEm5hJVdOArIZEuLPwEaZ9KY.svg', 'zO3rxRVKZACWVy4TZ6ccKOkxLY.svg', 'jxl1Z47gSwu7ttmLFbbnqSXXck0.svg'][i])} alt=""/></div></Link></Reveal>)}</div></section><Process locale={locale} service/><Protection locale={locale} basePath={basePath}/></Shell>; }
