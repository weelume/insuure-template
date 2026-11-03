import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Insure', description: '中英文响应式网站模板' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body>{children}</body></html>; }
