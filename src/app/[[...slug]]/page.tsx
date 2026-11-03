import { notFound } from 'next/navigation';
import { insuureTemplate as template } from '../../features/site-templates/catalog/insuure/meta';
export default async function Page({ params }: {
    params: Promise<{
        slug?: string[];
    }>;
}) {
    const segments = (await params).slug ?? [], locale = segments[0] === 'en' ? 'en' : 'zh', slug = (locale === 'en' ? segments.slice(1) : segments).join('/');
    const page = template.surfaces[0].pages.find(p => p.slug === slug);
    if (!page || slug === '404')
        notFound();
    const { default: View } = await page.load();
    return <View basePath="" locale={locale}/>;
}
