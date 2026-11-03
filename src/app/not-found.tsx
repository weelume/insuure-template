'use client';
import { usePathname } from 'next/navigation';
import NotFoundPage from '../features/site-templates/catalog/insuure/pages/NotFoundPage';
export default function NotFound() { const path = usePathname(); return <NotFoundPage basePath="" locale={path === '/en' || path.startsWith('/en/') ? 'en' : 'zh'}/>; }
