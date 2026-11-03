import { createElement } from 'react';
import type { SiteTemplate, SiteTemplatePageProps } from '../../types';
import metadata from './metadata.json';
import records from './content/pages.json';
import { articleTitles, serviceNames } from './content/site';
export const insuureTemplate: SiteTemplate = { ...metadata, screenshots: metadata.screenshots as SiteTemplate['screenshots'], surfaces: [{ id: 'site', name: '保险官网', platform: 'pc', locales: ['zh', 'en'], pages: [
                { slug: '', title: '首页', localizedTitles: { en: 'Home' }, load: () => import('./pages/HomePage') },
                { slug: 'about-us', title: '关于我们', localizedTitles: { en: 'About Us' }, load: () => import('./pages/AboutPage') },
                { slug: 'service', title: '保险服务', localizedTitles: { en: 'Services' }, load: () => import('./pages/ServicesPage') },
                { slug: 'contact', title: '联系我们', localizedTitles: { en: 'Contact Us' }, load: () => import('./pages/ContactPage') },
                { slug: 'blog', title: '保险知识', localizedTitles: { en: 'Blog' }, load: () => import('./pages/BlogPage') },
                { slug: 'legal/privacy-policy', title: '隐私政策', localizedTitles: { en: 'Privacy Policy' }, load: () => import('./pages/PrivacyPage') },
                { slug: '404', title: '页面未找到', localizedTitles: { en: 'Not Found' }, load: () => import('./pages/NotFoundPage') },
                ...records.services.map((service, index) => ({ slug: service.slug, title: serviceNames[index].zh, localizedTitles: { en: serviceNames[index].en }, load: async () => { const { default: Page } = await import('./pages/ServicePage'); return { default: (props: SiteTemplatePageProps) => createElement(Page, { ...props, index }) }; } })),
                ...records.articles.map((article, index) => ({ slug: article.slug, title: articleTitles[index].zh, localizedTitles: { en: articleTitles[index].en }, load: async () => { const { default: Page } = await import('./pages/ArticlePage'); return { default: (props: SiteTemplatePageProps) => createElement(Page, { ...props, index }) }; } })),
            ] }] };
