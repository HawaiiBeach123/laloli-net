'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

const ZEFFY_URL = 'https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-16381';

export default function DonatePage() {
  const { t } = useI18n();
  const [customAmount, setCustomAmount] = useState('');

  const tiers = [
    {
      emoji: '🌱',
      name: t('Friend', '友人'),
      price: 25,
      featured: false,
      benefits: [
        t('Provide school supplies for 1 child', '为1名儿童提供学习用品'),
        t('Monthly impact newsletter', '每月影响力简报'),
        t('Recognition on our website', '网站鸣谢'),
      ],
    },
    {
      emoji: '💛',
      name: t('Supporter', '支持者'),
      price: 50,
      featured: true,
      benefits: [
        t('Fund a week of tutoring sessions', '资助一周的辅导课程'),
        t('All Friend-level benefits', '包含友人级别所有权益'),
        t('Exclusive volunteer event invitations', '专属志愿者活动邀请'),
        t('Personalized thank-you card', '个性化感谢卡'),
      ],
    },
    {
      emoji: '🏆',
      name: t('Champion', '冠军'),
      price: 100,
      featured: false,
      benefits: [
        t('Sponsor a child for a full month', '全月资助一名儿童'),
        t('All Supporter-level benefits', '包含支持者级别所有权益'),
        t('Annual impact report & video', '年度影响力报告与视频'),
        t('VIP community events access', 'VIP社区活动通道'),
      ],
    },
  ];

  const impacts = [
    { emoji: '📚', number: '200+', label: t('Learning Kits Provided', '学习套件已发放') },
    { emoji: '👧', number: '500+', label: t('Students Supported', '受助学生') },
    { emoji: '🏫', number: '5', label: t('Partner Schools', '合作学校') },
    { emoji: '🧠', number: '30+', label: t('Wellness Workshops', '健康工作坊') },
  ];

  const partners = [
    'Global Ed Foundation',
    'Hope Alliance',
    'Community First',
    'EduBridge',
    'Bright Futures',
  ];

  const trustBadges = [
    { icon: '🛡️', label: t('501(c)(3) Certified', '501(c)(3) 认证') },
    { icon: '🔒', label: t('Secure Payment', '安全支付') },
    { icon: '✅', label: t('Verified Nonprofit', '认证非营利') },
    { icon: '📊', label: t('Financial Transparency', '财务透明') },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heartIcon}>❤️</span>
          <h1 className={styles.heroTitle}>
            {t('Make a Difference Today', '今天就做出改变')}
          </h1>
          <p className={styles.heroSub}>
            {t(
              'Your generosity empowers communities, transforms lives, and builds bridges of hope across the world.',
              '您的慷慨赋予社区力量，改变生活，在世界各地搭建希望的桥梁。'
            )}
          </p>
        </div>
      </section>

      {/* ===== DONATION TIERS ===== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Choose Your Impact Level', '选择您的影响级别')}</h2>
            <p>
              {t(
                'Every contribution, big or small, creates ripples of positive change.',
                '每一份贡献，无论大小，都能创造积极的变化。'
              )}
            </p>
          </div>

          <div className={styles.tiersGrid}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.tierCard} ${tier.featured ? styles.featured : ''}`}
              >
                {tier.featured && (
                  <div className={styles.featuredBadge}>
                    {t('Most Popular', '最受欢迎')}
                  </div>
                )}
                <div className={styles.tierEmoji}>{tier.emoji}</div>
                <div className={styles.tierName}>{tier.name}</div>
                <div className={styles.tierPrice}>
                  ${tier.price}
                  <span> / {t('month', '月')}</span>
                </div>
                <ul className={styles.tierBenefits}>
                  {tier.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <a href={ZEFFY_URL} target="_blank" rel="noopener noreferrer" className={tier.featured ? styles.tierBtn : styles.tierBtnOutline}>
                  {t('Donate Now', '立即捐赠')} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOM AMOUNT ===== */}
      <section className={styles.customSection}>
        <div className={styles.customBox}>
          <h3 className={styles.customTitle}>
            {t('Custom Donation Amount', '自定义捐赠金额')}
          </h3>
          <p className={styles.customSub}>
            {t(
              'Prefer a different amount? Every dollar makes a difference.',
              '想捐赠其他金额？每一美元都很重要。'
            )}
          </p>
          <div className={styles.customInputWrap}>
            <div className={styles.customInputGroup}>
              <span className={styles.dollarSign}>$</span>
              <input
                type="number"
                min="1"
                className={styles.customInput}
                placeholder={t('Enter amount', '输入金额')}
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>
            <a href={ZEFFY_URL} target="_blank" rel="noopener noreferrer" className={styles.customBtn}>
              {t('Donate', '捐赠')} ❤️
            </a>
          </div>
        </div>
      </section>

      {/* YOUR IMPACT - hidden until we have real numbers
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'var(--color-white)' }}>
              {t('Your Impact in Numbers', '您的影响力')}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)' }}>
              {t(
                'See how donor contributions have transformed communities worldwide.',
                '看看捐助者的贡献如何改变了世界各地的社区。'
              )}
            </p>
          </div>
          <div className={styles.impactGrid}>
            {impacts.map((item) => (
              <div key={item.label} className={styles.impactCard}>
                <div className={styles.impactEmoji}>{item.emoji}</div>
                <div className={styles.impactNumber}>{item.number}</div>
                <div className={styles.impactLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ===== PARTNERS ===== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Our Partners & Sponsors', '我们的合作伙伴')}</h2>
            <p>
              {t(
                'We are proud to work alongside these incredible organizations.',
                '我们很荣幸与这些杰出的组织合作。'
              )}
            </p>
          </div>
          <div className={styles.partnersGrid}>
            {partners.map((name) => (
              <div key={name} className={styles.partnerLogo}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            {trustBadges.map((badge) => (
              <div key={badge.label} className={styles.trustBadge}>
                <div className={styles.trustIcon}>{badge.icon}</div>
                <span className={styles.trustLabel}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
