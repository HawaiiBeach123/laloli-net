'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

interface FAQItem {
  question: { en: string; zh: string };
  answer: { en: string; zh: string };
}

const faqs: FAQItem[] = [
  {
    question: {
      en: 'How can I volunteer with Laloli Foundation?',
      zh: '我如何在乐乐力基金会做志愿者？',
    },
    answer: {
      en: 'We welcome volunteers of all backgrounds! Simply fill out the contact form above or email us at volunteer@laloli.net. We offer flexible scheduling and a variety of roles to match your skills and interests.',
      zh: '我们欢迎各种背景的志愿者！只需填写上面的联系表格或发送电子邮件至 volunteer@laloli.net。我们提供灵活的时间安排和各种角色，以匹配您的技能和兴趣。',
    },
  },
  {
    question: {
      en: 'Is my donation tax-deductible?',
      zh: '我的捐款可以免税吗？',
    },
    answer: {
      en: 'Yes! Laloli Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. We provide receipts for all contributions.',
      zh: '是的！乐乐力基金会是注册的501(c)(3)非营利组织。所有捐款在法律允许的最大范围内均可免税。我们为所有捐款提供收据。',
    },
  },
  {
    question: {
      en: 'What programs do you offer for youth?',
      zh: '你们为青少年提供哪些项目？',
    },
    answer: {
      en: 'We offer mentorship programs, after-school tutoring, cultural workshops, art classes, and summer camps. Our programs are designed for youth ages 6-18 and are available in both English and Chinese.',
      zh: '我们提供导师计划、课后辅导、文化工作坊、艺术课程和夏令营。我们的项目面向6-18岁的青少年，提供中英文双语服务。',
    },
  },
  {
    question: {
      en: 'How can my organization partner with Laloli?',
      zh: '我的组织如何与乐乐力合作？',
    },
    answer: {
      en: 'We love partnering with like-minded organizations! Whether it\'s co-hosting events, sponsoring programs, or sharing resources, we\'re open to collaboration. Contact us through the form above to start a conversation.',
      zh: '我们很高兴与志同道合的组织合作！无论是联合举办活动、赞助项目还是共享资源，我们都欢迎合作。通过上面的表格联系我们，开始一段对话。',
    },
  },
];

const contactInfo = [
  {
    icon: '📍',
    title: { en: 'Our Office', zh: '我们的办公室' },
    content: { en: '123 Hope Street, Suite 200\nSan Francisco, CA 94102', zh: '旧金山市希望街123号，200室\n加利福尼亚州 94102' },
  },
  {
    icon: '📞',
    title: { en: 'Phone', zh: '电话' },
    content: { en: '+1 (415) 555-0123\nMon-Fri: 9:00 AM - 6:00 PM', zh: '+1 (415) 555-0123\n周一至周五：上午9:00 - 下午6:00' },
  },
  {
    icon: '✉️',
    title: { en: 'Email', zh: '电子邮件' },
    content: { en: 'info@laloli.net\nvolunteer@laloli.net', zh: 'info@laloli.net\nvolunteer@laloli.net' },
  },
  {
    icon: '🕐',
    title: { en: 'Office Hours', zh: '办公时间' },
    content: { en: 'Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 2PM\nSunday: Closed', zh: '周一至周五：上午9点 - 下午6点\n周六：上午10点 - 下午2点\n周日：休息' },
  },
];

const subjectOptions = [
  { en: 'General Inquiry', zh: '一般咨询' },
  { en: 'Volunteer Opportunities', zh: '志愿者机会' },
  { en: 'Donation & Sponsorship', zh: '捐赠与赞助' },
  { en: 'Program Information', zh: '项目信息' },
  { en: 'Partnership', zh: '合作' },
  { en: 'Media & Press', zh: '媒体与新闻' },
];

export default function ContactPage() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            💬 {t('Get In Touch', '联系我们')}
          </div>
          <h1 className={styles.heroTitle}>
            {t("We'd Love to ", '我们很乐意')}<span>{t('Hear From You', '倾听您的声音')}</span>
          </h1>
          <p className={styles.heroDesc}>
            {t(
              'Have questions, ideas, or want to get involved? Reach out to us and let\'s start a conversation about making a difference together.',
              '有问题、想法，或想参与？联系我们，让我们一起开始一段关于共同改变世界的对话。'
            )}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>
                {t('Send Us a Message', '给我们发送消息')}
              </h2>
              <p className={styles.formDesc}>
                {t(
                  'Fill out the form below and we\'ll get back to you within 24 hours.',
                  '填写下面的表格，我们将在24小时内回复您。'
                )}
              </p>
              <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    {t('Full Name', '姓名')} *
                  </label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder={t('John Doe', '请输入姓名')}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    {t('Email Address', '电子邮件')} *
                  </label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder={t('john@example.com', '请输入邮箱')}
                    required
                  />
                </div>
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>
                    {t('Subject', '主题')} *
                  </label>
                  <select className={styles.formSelect} required>
                    <option value="">{t('Select a subject...', '选择一个主题...')}</option>
                    {subjectOptions.map((opt, i) => (
                      <option key={i} value={opt.en}>
                        {t(opt.en, opt.zh)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>
                    {t('Message', '留言')} *
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    placeholder={t(
                      'Tell us how we can help you...',
                      '告诉我们如何帮助您...'
                    )}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton}>
                  {t('Send Message', '发送消息')} ✨
                </button>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className={styles.infoSide}>
              {contactInfo.map((info, i) => (
                <div key={i} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h4>{t(info.title.en, info.title.zh)}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {t(info.content.en, info.content.zh)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div style={{ padding: '0 var(--space-lg)' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '12px' }}>
                  {t('Follow Us', '关注我们')}
                </p>
                <div className={styles.socialLinks}>
                  <span className={styles.socialLink} title="Facebook">📘</span>
                  <span className={styles.socialLink} title="Instagram">📷</span>
                  <span className={styles.socialLink} title="Twitter">🐦</span>
                  <span className={styles.socialLink} title="LinkedIn">💼</span>
                  <span className={styles.socialLink} title="YouTube">▶️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapDot} style={{ top: '40%', left: '35%' }} />
            <span className={styles.mapIcon}>🗺️</span>
            <div className={styles.mapText}>
              <h3>{t('Laloli Foundation HQ', '乐乐力基金会总部')}</h3>
              <p>{t('123 Hope Street, San Francisco, CA 94102', '旧金山市希望街123号，加州 94102')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.sectionHeader}>
            <h2>{t('Frequently Asked Questions', '常见问题')}</h2>
            <p>
              {t(
                'Find answers to common questions about our organization and programs.',
                '查找有关我们组织和项目的常见问题的答案。'
              )}
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openFaq === index ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{t(faq.question.en, faq.question.zh)}</span>
                  <span className={`${styles.faqChevron} ${openFaq === index ? styles.faqChevronOpen : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${openFaq === index ? styles.faqAnswerOpen : ''}`}>
                  <div className={styles.faqAnswerInner}>
                    {t(faq.answer.en, faq.answer.zh)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
