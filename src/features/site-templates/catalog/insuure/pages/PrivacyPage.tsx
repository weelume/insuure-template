'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { Shell } from '../components/Shell';
import { Reveal } from '../components/Motion';
export default function PrivacyPage({ locale = 'zh', basePath }: SiteTemplatePageProps) {
    const sections = locale === 'zh' ? [
        ['生效日期：2026 年 1 月 3 日', '本页为演示模板的隐私说明。实际运营前，请按真实业务、服务提供商和适用法律更新。'],
        ['我们收集的信息', '本演示表单只在当前浏览器中进行必填项和格式校验。姓名、电子邮箱、电话及留言不会发送至服务器，也不会写入本地持久化存储。'],
        ['信息如何使用', '输入内容仅用于演示校验结果；不会创建保单、订阅邮件、处理支付或提交真实业务申请。'],
        ['数据保护', '演示不处理真实保险交易。请勿输入身份证号、健康资料、支付信息或其他敏感个人信息。'],
        ['信息共享', '本演示不向第三方共享表单输入内容。图片、字体与视频使用本地托管素材。'],
        ['Cookie 与浏览记录', '模板未添加分析追踪 Cookie。页面语言由路径决定，页面切换使用客户端路由。'],
        ['第三方服务', '此版本未接入邮件、支付、保险或分析服务。未来接入时需明确说明处理目的、服务商及隐私条件。'],
        ['您的权利', '您可以随时清空输入或关闭页面。演示未持久化保存表单信息。真实运营版本应提供访问、更正与删除渠道。'],
        ['联系我们', '隐私相关问题请通过联系页查看演示说明。此模板不提供真实保险咨询或客户服务。'],
    ] : [['Effective Date: 03 Jan 2026', 'This is a demonstration privacy notice. Review it for your actual business, service providers and applicable laws before operation.'], ['Information We Collect', 'This demonstration validates required fields and formats in the current browser only. Names, email addresses, telephone numbers and messages are not sent to a server or written to persistent browser storage.'], ['How We Use Your Information', 'Inputs demonstrate validation only. They do not create policies, subscribe to newsletters, process payments or submit actual requests.'], ['Data Protection', 'This demo does not process insurance transactions. Do not enter identity numbers, health records, payment information or other sensitive personal information.'], ['Sharing of Information', 'This demo does not share form inputs with third parties. Images, fonts and videos are hosted locally.'], ['Cookies', 'No analytics tracking cookies are added by the template. Language is determined by the URL and navigation uses client routing.'], ['Third-Party Services', 'No email, payment, insurance or analytics service is integrated. Any future integration requires a clear explanation of processing purposes and provider terms.'], ['Your Rights', 'You can clear inputs or close the page at any time. Form data is not persisted. A live service should provide access, correction and deletion channels.'], ['Contact Us', 'See the contact page for demonstration information. This template does not provide actual insurance advice or customer service.']];
    return <Shell locale={locale} basePath={basePath}><section className="article container"><Reveal><h1 className="center">{locale === 'zh' ? '隐私政策' : 'Privacy Policy'}</h1></Reveal><div className="article-body">{sections.map(([title, body]) => <Reveal key={title}><h2>{title}</h2><p>{body}</p></Reveal>)}</div></section></Shell>;
}
