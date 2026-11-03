'use client';
import { createContext, useContext, type ReactNode } from 'react';
import type { TemplateLocale } from '../../types';
export interface TemplateHostOptions {
    brandName?: Record<TemplateLocale, string>;
    logoSrc?: string;
    lightLogoSrc?: string;
    marketplaceHref?: string;
    marketplaceLabel?: Record<TemplateLocale, string>;
    marketplaceAriaLabel?: Record<TemplateLocale, string>;
    filing?: ReactNode;
}
const HostContext = createContext<TemplateHostOptions>({});
/** 品牌与备案由宿主注入，通用模板不依赖消费方的运行环境。 */
export function TemplateHostProvider({ children, ...options }: TemplateHostOptions & {
    children: ReactNode;
}) { return <HostContext.Provider value={options}>{children}</HostContext.Provider>; }
export const useTemplateHost = () => useContext(HostContext);
