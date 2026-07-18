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
      en: 'How can I volunteer with LALOLI Pathway?',
      zh: '我如何在LALOLI Pathway做志愿者？',
    },
    answer: {
      en: 'We welcome volunteers of all backgrounds! Simply fill out the contact form above or email us at info@laloli.net. We offer flexible scheduling and a variety of roles to match your skills and interests.',
      zh: '我们欢迎各种背景的志愿者！只需填写上面的联系表格或发送电子邮件至 info@laloli.net。我们提供灵活的时间安排和各种角色，以匹配您的技能和兴趣。',
    },
  },
  {
    question: {
      en: 'Is my donation tax-deductible?',
      zh: '我的捐款可以免税吗？',
    },
    answer: {
      en: 'Yes! LALOLI Pathway is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law. We provide receipts for all contributions.',
      zh: '是的！LALOLI Pathway是注册的501(c)(3)非营利组织。所有捐款在法律允许的最大范围内均可免税。我们为所有捐款提供收据。',
    },
  },
  {
    question: {
      en: 'How can my organization partner with LALOLI?',
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
    title: { en: 'California Office', zh: '加州办公室' },
    content: { en: 'Cupertino, CA 95014', zh: '加州库比蒂诺 95014' },
  },
  {
    icon: '🌺',
    title: { en: 'Hawaii Office', zh: '夏威夷办公室' },
    content: { en: '15-1719 5th Ave\nKeaau, HI 96749', zh: '15-1719 5th Ave\n凯阿奥, 夏威夷 96749' },
  },
  {
    icon: '✉️',
    title: { en: 'Email', zh: '电子邮件' },
    content: { en: 'info@laloli.net', zh: 'info@laloli.net' },
  },
  {
    icon: '📞',
    title: { en: 'Phone', zh: '电话' },
    content: { en: '(408) 892-6366', zh: '(408) 892-6366' },
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
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE');
    formData.append('subject', `LALOLI Contact: ${formData.get('subject_select')}`);
    formData.append('from_name', 'LALOLI Pathway Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
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

              {formStatus === 'success' && (
                <div className={styles.formAlert} style={{ background: 'rgba(72, 187, 120, 0.1)', color: '#48bb78', border: '1px solid rgba(72, 187, 120, 0.3)' }}>
                  ✅ {t('Message sent successfully! We\'ll get back to you soon.', '消息发送成功！我们会尽快回复您。')}
                </div>
              )}
              {formStatus === 'error' && (
                <div className={styles.formAlert} style={{ background: 'rgba(252, 129, 129, 0.1)', color: '#fc8181', border: '1px solid rgba(252, 129, 129, 0.3)' }}>
                  ❌ {t('Failed to send message. Please try again or email us directly.', '消息发送失败。请重试或直接发送邮件给我们。')}
                </div>
              )}

              <form className={styles.formGrid} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    {t('Full Name', '姓名')} *
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    className={styles.formInput}
                    placeholder={t('john@example.com', '请输入邮箱')}
                    required
                  />
                </div>
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>
                    {t('Subject', '主题')} *
                  </label>
                  <select className={styles.formSelect} name="subject_select" required>
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
                    name="message"
                    className={styles.formTextarea}
                    placeholder={t(
                      'Tell us how we can help you...',
                      '告诉我们如何帮助您...'
                    )}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitButton} disabled={formStatus === 'sending'}>
                  {formStatus === 'sending'
                    ? t('Sending...', '发送中...')
                    : t('Send Message', '发送消息')
                  } {formStatus !== 'sending' && '✨'}
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

      {/* Maps Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', color: 'var(--color-primary)' }}>
            {t('Our Offices', '我们的办公室')}
          </h2>
          <div className={styles.mapsGrid}>
            <div className={styles.mapCard}>
              <div className={styles.mapEmbed}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50752.05216784!2d-122.06985!3d37.3229978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2095014!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cupertino Office"
                />
              </div>
              <div className={styles.mapInfo}>
                <h3>📍 {t('California Office', '加州办公室')}</h3>
                <p>Cupertino, CA 95014</p>
              </div>
            </div>
            <div className={styles.mapCard}>
              <div className={styles.mapEmbed}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.5!2d-154.9614!3d19.6414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7953e6d4e2c2f0f5%3A0x0!2s15-1719+5th+Ave%2C+Keaau%2C+HI+96749!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hawaii Office"
                />
              </div>
              <div className={styles.mapInfo}>
                <h3>🌺 {t('Hawaii Office', '夏威夷办公室')}</h3>
                <p>15-1719 5th Ave, Keaau, HI 96749</p>
              </div>
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
