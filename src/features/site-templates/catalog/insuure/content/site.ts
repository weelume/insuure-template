export type Copy = {
    zh: string;
    en: string;
};
export const text = (zh: string, en: string): Copy => ({ zh, en });
export const nav = [['', '首页', 'Home'], ['about-us', '关于我们', 'About Us'], ['service', '保险服务', 'Services'], ['blog', '保险知识', 'Blog'], ['contact', '联系我们', 'Contact Us']] as const;
export const benefits = [
    [text('财务保障', 'Financial Security'), text('无论生活带来什么变化，都让您在意的人获得稳妥支持。', 'Ensures your loved ones are supported and secure, no matter what life brings.')],
    [text('安心生活', 'Peace of Mind'), text('从容应对不确定性，安心承担每一份未来责任。', 'Gives you confidence knowing you’re prepared for uncertainties and future responsibilities.')],
    [text('智慧规划', 'Smart Planning'), text('制定清晰的财务策略，守护家人，也为未来积累。', "Helps you create a clear financial strategy to protect and grow your family's future.")],
    [text('长期价值', 'Long-Term Value'), text('为今天提供保障，为明天建立长久的财务稳定。', 'Offers protection today while contributing to long-term financial stability.')],
    [text('值得信赖的支持', 'Trusted Support'), text('需要帮助时，专业团队始终及时响应。', 'Provides expert guidance and responsive assistance whenever you need help.')],
] as const;
export const steps = [
    [text('了解需求', 'Understand'), text('把保险讲明白，让每个决定更简单可靠。', 'Insurance made simple, clear, and dependable.')],
    [text('获得保障', 'Protect'), text('获得条款清晰、适合自己的可靠保单。', 'You get a clear, reliable policy tailored to you.')],
    [text('持续支持', 'Support'), text('持续协助，让理赔过程顺畅安心。', 'We provide ongoing help and smooth claims service.')],
] as const;
export const faq = [
    [text('我的保单提供哪些保障？', 'What Does My Policy Cover?'), text('保单涵盖所选方案列明的保障责任、给付及符合条件的理赔。请阅读具体条款、限额与免责事项。', 'Your policy covers essential protections outlined in your plan, including benefits and approved claims. Please review the terms, limits and exclusions.')],
    [text('如何申请理赔？', 'How do I file a claim?'), text('联系服务团队，准备保单编号、事件说明和证明材料。我们会说明后续流程。', 'Contact our support team with your policy number, a description of the event and supporting documents. We will guide you through the next steps.')],
    [text('理赔审批需要多久？', 'How long does claim approval take?'), text('审批时间取决于保险类型、材料完整度和审核要求。服务团队会明确告知进度及预计时间。', 'Approval time depends on the policy, complete documentation and review requirements. Our team will explain progress and expected timelines.')],
    [text('可以定制保险方案吗？', 'Can I customize my insurance plan?'), text('可以按人生阶段、预算和保障需求选择方案，具体调整需遵循保单条件。', 'Choose a plan for your life stage, budget and protection needs. Changes are subject to your policy terms.')],
    [text('保单可以续保吗？', 'Is my policy renewable?'), text('续保条件以所选保单条款为准。请在到期前核对保障范围及续保条件。', 'Renewal is subject to the terms of your policy. Review coverage and renewal conditions before the expiry date.')],
] as const;
export const quotes = [
    { name: 'Alxgeder M.', quote: text('从开始到结束都清晰、简单。知道自己拥有全面保障，让我很安心。', 'Everything was clear and easy from start to finish. I feel secure knowing I’m fully covered.') },
    { name: 'Andre Jakubowski', quote: text('整个过程顺畅透明，现在我对未来更有信心。', 'The experience was smooth and transparent. I now have peace of mind about my future.') },
    { name: 'Alex Morgan', quote: text('轻松而值得信赖的体验，让我的规划更清晰。', 'The journey felt effortless and trustworthy. I finally gained confidence and clarity regarding my plans.') },
];
export const planNames = [text('人生启程计划', 'Life Start Plan'), text('家庭守护计划', 'Family Shield Plan'), text('未来安心计划', 'Future Secure Plan')];
export const serviceNames = [text('人寿保险', 'Life Insurance'), text('健康保险', 'Health Insurance'), text('机动车保险', 'Motor Insurance'), text('财产保险', 'Property Insurance'), text('企业保险', 'Business Insurance')];
export const serviceSlugs = ['life-insurance', 'health-insurance', 'motor-insurance', 'property-insurance', 'business-insurance'];
export const serviceDescriptions = [
    text('灵活的人寿保障，为挚爱的家人提供长久的财务支持。', 'Secure your loved ones financially with flexible life plans designed for long-term peace of mind.'),
    text('优质医疗保障，帮助您更有把握地管理医疗开支。', 'Get quality medical coverage that helps you manage healthcare costs with confidence.'),
    text('可靠的机动车保障，应对意外、盗窃与车辆损坏。', 'Protect your vehicle from accidents, theft, and damage with reliable motor coverage.'),
    text('为房屋与财产提供保障，应对火灾、盗窃和意外风险。', 'Safeguard your home and property against fire, theft, and unexpected risks.'),
    text('为企业量身制定保障方案，从容应对经营挑战。', 'Custom plans that help your business stay protected and prepared for challenges.'),
];
export const articleTitles = [text('简单几步，为更安心的生活建立坚实保障', 'Simple Steps to Achieve Strong Protection for a Better and Safer Life.'), text('告别困惑与压力，获得可靠的日常保障', 'Get Reliable Protection Without Any Stress or Confusion in Your Daily Life.'), text('从今天开始，守护家庭财务未来', 'Secure Your Family’s Financial Future Today.'), text('让每一天，都有保障与信心', 'Stay Protected and Confident Every Single Day.'), text('因为家人的未来，值得认真守护', 'Because Your Family’s Future Truly Matters.')];
export const articleIntro = [text('从实用步骤开始，了解如何保护家人、收入与财产，为生活建立更稳固的安全网。', 'Learn the essential steps to secure strong insurance protection, giving you confidence and peace of mind for a safer, more secure future.'), text('保险选择可以更简单。这份指南用清楚的解释消除术语与困惑，帮助您从容作出决定。', 'Navigating insurance options can be stressful, but it doesn’t have to be. This guide cuts through the jargon and confusion, offering clear, stress-free advice so you can make informed choices with confidence and peace of mind.'), text('家人的未来无价。通过保险建立坚实的财务基础，无论生活如何变化，都让挚爱有所依靠。', 'Your family’s future is priceless. This guide shows you how to use insurance to create a solid financial foundation, protecting what matters most and ensuring your loved ones are supported no matter what life brings.'), text('安心源于知道自己有所保障。了解如何维持适合生活方式的保护，让每一天更有信心。', 'Peace of mind comes from knowing you’re covered. Discover practical tips to maintain protection that fits your lifestyle, helping you face each day with confidence and security.'), text('家人是一切。审慎的保险选择可以守护梦想，在关键时刻提供有意义的支持。', 'Family is everything. Learn how thoughtful insurance choices can safeguard your family’s dreams and provide a safety net that truly makes a difference when it counts.')];
export const articleBody = [
    { title: text('保险是什么？', 'What is Insurance?'), body: text('保险是一张财务安全网。通过支付保费，在意外、疾病或损失发生时，您无需独自承担全部费用。选择时请同时了解保障限额、免赔额与每月开支，明确自己需要防范的风险，以及意外发生时能够承担多少费用。', 'At its simplest, insurance is a financial safety net you pay into so that if something goes wrong — like an accident, illness, or damage — you aren’t left paying the full cost yourself. Look at coverage limits, deductibles, and monthly costs. Ask: What risks am I protecting against? How much can I afford if something happens?') },
    { title: text('常见保险类型', 'Types You’ll Encounter:'), body: text('健康保险提供医疗保障；机动车保险保障车辆与相关责任；房屋或租客保险保护财产；人寿保险在被保险人身故后为家人提供经济支持。', 'Health Insurance – covers medical care. Auto Insurance – protects your car and liability. Home/Renter’s Insurance – protects your property. Life Insurance – provides for loved ones if you pass away.') },
    { title: text('如何理性选择', 'Choosing Wisely'), body: text('比较保障限额、免赔额与每月费用。先想清楚需要防范什么风险，再判断事故发生后可以承担的成本。保存相关资料，了解申请时限，确认保单保障与不保障的内容。把细节弄清楚，保险就不必令人焦虑。', 'Look at coverage limits, deductibles, and monthly costs. Ask: What risks am I protecting against? How much can I afford if something happens? Document everything. Understand deadlines. Know what your policy does and doesn’t cover. Insurance doesn’t have to be overwhelming.') },
];
export const planPricing = [{ monthly: 299, yearlyMonthly: 199 }, { monthly: 499, yearlyMonthly: 299 }, { monthly: 999, yearlyMonthly: 599 }] as const;
