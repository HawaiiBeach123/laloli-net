'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

const featuredArticle = {
  date: { en: 'June 15, 2026', zh: '2026年6月15日' },
  category: { en: 'Milestone', zh: '里程碑' },
  title: {
    en: 'LALOLI Pathway Celebrates 500 Students Served in First Year',
    zh: 'LALOLI Pathway庆祝首年服务500名学生',
  },
  excerpt: {
    en: 'Since launching our first programs in 2025, LALOLI Pathway has served over 500 K-12 students through AI-powered learning tools, mental health workshops, and mentorship. This milestone reflects the dedication of our growing volunteer team and the trust of families in our mission to help youth Laugh, Love, and Live.',
    zh: '自2025年启动首批项目以来，LALOLI Pathway已通过AI学习工具、心理健康工作坊和导师辅导服务了500多名K-12学生。这一里程碑体现了志愿者团队的奉献和家庭对我们使命的信任。',
  },
  readTime: { en: '5 min read', zh: '5分钟阅读' },
};

const articles = [
  {
    id: 1,
    date: { en: 'June 10, 2026', zh: '2026年6月10日' },
    category: { en: 'Programs', zh: '项目' },
    categoryColor: '#48bb78',
    title: {
      en: 'New Youth Mentorship Program Launches This Fall',
      zh: '新青少年导师计划将于今秋启动',
    },
    excerpt: {
      en: 'Our expanded mentorship program pairs young adults with experienced professionals for career guidance, skill building, and personal growth opportunities.',
      zh: '我们扩展的导师计划将年轻人与资深专业人士配对，提供职业指导、技能培养和个人成长机会。',
    },
    readTime: { en: '3 min read', zh: '3分钟阅读' },
  },
  {
    id: 2,
    date: { en: 'June 5, 2026', zh: '2026年6月5日' },
    category: { en: 'Community', zh: '社区' },
    categoryColor: '#4299e1',
    title: {
      en: 'Community Garden Project Blooms in Three New Neighborhoods',
      zh: '社区花园项目在三个新社区绽放',
    },
    excerpt: {
      en: 'Fresh produce and community connections grow side by side as our garden initiative expands to three underserved neighborhoods this spring.',
      zh: '随着我们的花园项目在今春扩展到三个服务不足的社区，新鲜农产品和社区联系并肩成长。',
    },
    readTime: { en: '4 min read', zh: '4分钟阅读' },
  },
  {
    id: 3,
    date: { en: 'May 28, 2026', zh: '2026年5月28日' },
    category: { en: 'Partnerships', zh: '合作' },
    categoryColor: '#9f7aea',
    title: {
      en: 'Strategic Partnership with Global Education Alliance',
      zh: '与全球教育联盟达成战略合作',
    },
    excerpt: {
      en: 'A new collaboration will bring innovative STEM education resources to underserved schools in our community network.',
      zh: '一项新的合作将为我们社区网络中的服务不足学校带来创新的STEM教育资源。',
    },
    readTime: { en: '3 min read', zh: '3分钟阅读' },
  },
  {
    id: 4,
    date: { en: 'May 20, 2026', zh: '2026年5月20日' },
    category: { en: 'Volunteer', zh: '志愿者' },
    categoryColor: '#ed8936',
    title: {
      en: 'Volunteer Spotlight: Meet the Heroes Behind Our Mission',
      zh: '志愿者风采：认识我们使命背后的英雄',
    },
    excerpt: {
      en: 'From weekly tutoring sessions to large-scale event coordination, our volunteers share their stories and what drives them to give back.',
      zh: '从每周辅导课程到大型活动协调，我们的志愿者分享他们的故事以及驱使他们回馈社会的动力。',
    },
    readTime: { en: '6 min read', zh: '6分钟阅读' },
  },
  {
    id: 5,
    date: { en: 'May 12, 2026', zh: '2026年5月12日' },
    category: { en: 'Events', zh: '活动' },
    categoryColor: '#e53e3e',
    title: {
      en: 'Spring Cultural Exchange: A Resounding Success',
      zh: '春季文化交流：圆满成功',
    },
    excerpt: {
      en: 'Over 200 community members gathered to celebrate diversity through food, art, and music from six different cultural traditions.',
      zh: '超过200名社区成员聚集在一起，通过来自六种不同文化传统的美食、艺术和音乐来庆祝多样性。',
    },
    readTime: { en: '4 min read', zh: '4分钟阅读' },
  },
  {
    id: 6,
    date: { en: 'May 5, 2026', zh: '2026年5月5日' },
    category: { en: 'Fundraising', zh: '筹款' },
    categoryColor: '#d4a843',
    title: {
      en: 'First Fundraising Campaign Exceeds Goal',
      zh: '首次筹款活动超额完成目标',
    },
    excerpt: {
      en: 'Thanks to the generosity of our early supporters, our inaugural fundraising campaign raised over $15,000 for youth education and mental health programs.',
      zh: '感谢早期支持者的慷慨解囊，我们的首次筹款活动为青少年教育和心理健康项目筹集了超过1.5万美元。',
    },
    readTime: { en: '3 min read', zh: '3分钟阅读' },
  },
];

export default function NewsPage() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <main className={styles.page}>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            {t('📰 Stay Informed', '📰 了解动态')}
          </span>
          <h1>{t('News & Stories', '新闻与故事')}</h1>
          <p>
            {t(
              'Stay up to date with the latest stories, announcements, and impact reports from the LALOLI Pathway.',
              '了解LALOLI Pathway的最新故事、公告和影响报告。'
            )}
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.heroCircle1} />
          <div className={styles.heroCircle2} />
        </div>
      </section>

      {/* ─── Featured Article ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              {t('Featured', '精选')}
            </span>
            <h2>{t('Featured Story', '精选故事')}</h2>
          </div>

          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <div className={styles.featuredImageIcon}>
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div className={styles.featuredImageOverlay}>
                <span className={styles.featuredCategory}>
                  {t(featuredArticle.category.en, featuredArticle.category.zh)}
                </span>
              </div>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredDate}>
                  {t(featuredArticle.date.en, featuredArticle.date.zh)}
                </span>
                <span className={styles.readTime}>
                  {t(featuredArticle.readTime.en, featuredArticle.readTime.zh)}
                </span>
              </div>
              <h3>{t(featuredArticle.title.en, featuredArticle.title.zh)}</h3>
              <p>{t(featuredArticle.excerpt.en, featuredArticle.excerpt.zh)}</p>
              <button className={styles.readMoreBtn}>
                {t('Read Full Story', '阅读全文')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* ─── News Grid ─── */}
      <section className={`${styles.section} ${styles.gridSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              {t('Latest', '最新')}
            </span>
            <h2>{t('Latest News', '最新新闻')}</h2>
            <p>
              {t(
                'Discover what\'s happening across our community and programs.',
                '了解我们社区和项目的最新动态。'
              )}
            </p>
          </div>

          <div className={styles.newsGrid}>
            {articles.map((article, index) => (
              <article
                key={article.id}
                className={styles.newsCard}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.newsImagePlaceholder}>
                  <div className={styles.newsImageIcon}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                </div>
                <div className={styles.newsBody}>
                  <div className={styles.newsMeta}>
                    <span
                      className={styles.newsCategory}
                      style={{ '--category-color': article.categoryColor } as React.CSSProperties}
                    >
                      {t(article.category.en, article.category.zh)}
                    </span>
                    <span className={styles.newsDate}>
                      {t(article.date.en, article.date.zh)}
                    </span>
                  </div>
                  <h3>{t(article.title.en, article.title.zh)}</h3>
                  <p>{t(article.excerpt.en, article.excerpt.zh)}</p>
                  <div className={styles.newsFooter}>
                    <span className={styles.readTime}>
                      {t(article.readTime.en, article.readTime.zh)}
                    </span>
                    <span className={styles.readMoreLink}>
                      {t('Read More', '阅读更多')} →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter Signup ─── */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterIcon}>✉️</div>
          <h2>{t('Stay Connected', '保持联系')}</h2>
          <p>
            {t(
              'Subscribe to our newsletter and never miss an update. Get the latest stories, event invitations, and impact reports delivered to your inbox.',
              '订阅我们的新闻通讯，不再错过任何更新。将最新故事、活动邀请和影响报告直接送到您的收件箱。'
            )}
          </p>

          {subscribed ? (
            <div className={styles.successMessage}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>
                {t(
                  'Thank you for subscribing! 🎉',
                  '感谢您的订阅！🎉'
                )}
              </span>
            </div>
          ) : (
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('Enter your email address', '输入您的电子邮件地址')}
                  required
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeBtn}>
                  {t('Subscribe', '订阅')}
                </button>
              </div>
              <span className={styles.privacyNote}>
                {t(
                  'We respect your privacy. Unsubscribe anytime.',
                  '我们尊重您的隐私。可随时取消订阅。'
                )}
              </span>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
