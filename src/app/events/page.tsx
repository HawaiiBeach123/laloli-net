'use client';

import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

const upcomingEvents = [
  {
    id: 1,
    month: { en: 'JUL', zh: '7月' },
    day: '12',
    year: '2026',
    title: { en: 'Summer Community Festival', zh: '夏季社区嘉年华' },
    time: { en: '10:00 AM – 4:00 PM', zh: '上午10:00 – 下午4:00' },
    location: { en: 'Central Park Pavilion, San Jose', zh: '圣何塞中央公园展馆' },
    description: {
      en: 'Join us for a day of music, food, and cultural exchange. Activities for all ages including art workshops, traditional performances, and community conversations.',
      zh: '加入我们，享受音乐、美食和文化交流的一天。包括艺术工作坊、传统表演和社区对话等适合所有年龄段的活动。',
    },
    tag: { en: 'Community', zh: '社区' },
  },
  {
    id: 2,
    month: { en: 'JUL', zh: '7月' },
    day: '25',
    year: '2026',
    title: { en: 'Youth Leadership Workshop', zh: '青少年领导力工作坊' },
    time: { en: '1:00 PM – 5:00 PM', zh: '下午1:00 – 下午5:00' },
    location: { en: 'Laloli Community Center', zh: 'Laloli社区中心' },
    description: {
      en: 'An interactive workshop empowering young leaders with skills in public speaking, project management, and community organizing.',
      zh: '一个互动式工作坊，培养年轻领导者的公众演讲、项目管理和社区组织能力。',
    },
    tag: { en: 'Education', zh: '教育' },
  },
  {
    id: 3,
    month: { en: 'AUG', zh: '8月' },
    day: '08',
    year: '2026',
    title: { en: 'Charity Gala Dinner', zh: '慈善晚宴' },
    time: { en: '6:00 PM – 10:00 PM', zh: '下午6:00 – 晚上10:00' },
    location: { en: 'Grand Ballroom, Fairmont Hotel', zh: '费尔蒙酒店大宴会厅' },
    description: {
      en: 'An elegant evening of fine dining, live entertainment, and inspiring stories. All proceeds support our education and community programs.',
      zh: '一个优雅的夜晚，享受精致美食、现场娱乐和动人故事。所有收益将支持我们的教育和社区项目。',
    },
    tag: { en: 'Fundraising', zh: '筹款' },
  },
  {
    id: 4,
    month: { en: 'AUG', zh: '8月' },
    day: '22',
    year: '2026',
    title: { en: 'Volunteer Training Day', zh: '志愿者培训日' },
    time: { en: '9:00 AM – 12:00 PM', zh: '上午9:00 – 中午12:00' },
    location: { en: 'Online (Zoom)', zh: '线上 (Zoom)' },
    description: {
      en: 'Comprehensive training for new and existing volunteers covering safety protocols, cultural sensitivity, and program delivery best practices.',
      zh: '面向新老志愿者的综合培训，涵盖安全协议、文化敏感性和项目实施最佳实践。',
    },
    tag: { en: 'Volunteer', zh: '志愿者' },
  },
];

const pastEvents = [
  {
    id: 1,
    title: { en: 'Spring Cultural Exchange', zh: '春季文化交流' },
    date: { en: 'April 15, 2026', zh: '2026年4月15日' },
    description: {
      en: 'Over 200 attendees celebrated cultural diversity through traditional arts, cuisine, and performances from six different cultures.',
      zh: '超过200名参与者通过传统艺术、美食和来自六种不同文化的表演庆祝文化多样性。',
    },
    attendees: 200,
  },
  {
    id: 2,
    title: { en: 'Annual Fundraising Walk', zh: '年度筹款步行' },
    date: { en: 'March 8, 2026', zh: '2026年3月8日' },
    description: {
      en: 'Our community came together for a 5K walk raising over $25,000 for youth education programs in underserved communities.',
      zh: '我们的社区齐聚一堂参加5公里步行活动，为服务不足社区的青少年教育项目筹集了超过25,000美元。',
    },
    attendees: 350,
  },
  {
    id: 3,
    title: { en: 'Winter Holiday Celebration', zh: '冬季假日庆典' },
    date: { en: 'December 20, 2025', zh: '2025年12月20日' },
    description: {
      en: 'A heartwarming holiday gathering featuring gift-giving, caroling, and a shared meal with families from across our community network.',
      zh: '一个温馨的假日聚会，包括礼物赠送、颂歌演唱，以及与来自我们社区网络各地的家庭共进晚餐。',
    },
    attendees: 150,
  },
];

export default function EventsPage() {
  const { t } = useI18n();

  return (
    <main className={styles.page}>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            {t('📅 Community Calendar', '📅 社区日历')}
          </span>
          <h1>{t('Events & Gatherings', '活动与聚会')}</h1>
          <p>
            {t(
              'Come together, learn, celebrate, and make a difference. Join our upcoming events or revisit the memories we\'ve created.',
              '共聚一堂，学习、庆祝，改变世界。加入我们即将举办的活动，或重温我们创造的美好回忆。'
            )}
          </p>
        </div>
        <div className={styles.heroDecor}>
          <div className={styles.heroCircle1} />
          <div className={styles.heroCircle2} />
        </div>
      </section>

      {/* ─── Upcoming Events ─── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              {t('Upcoming', '即将举行')}
            </span>
            <h2>{t('Upcoming Events', '即将举办的活动')}</h2>
            <p>
              {t(
                'Mark your calendars and join us at our upcoming events.',
                '请标记日历，加入我们即将举办的活动。'
              )}
            </p>
          </div>

          <div className={styles.eventsTimeline}>
            {upcomingEvents.map((event, index) => (
              <article
                key={event.id}
                className={styles.eventCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.dateBadge}>
                  <span className={styles.dateMonth}>
                    {t(event.month.en, event.month.zh)}
                  </span>
                  <span className={styles.dateDay}>{event.day}</span>
                  <span className={styles.dateYear}>{event.year}</span>
                </div>

                <div className={styles.eventBody}>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventTag}>
                      {t(event.tag.en, event.tag.zh)}
                    </span>
                  </div>
                  <h3>{t(event.title.en, event.title.zh)}</h3>

                  <div className={styles.eventDetails}>
                    <div className={styles.eventDetail}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{t(event.time.en, event.time.zh)}</span>
                    </div>
                    <div className={styles.eventDetail}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{t(event.location.en, event.location.zh)}</span>
                    </div>
                  </div>

                  <p className={styles.eventDescription}>
                    {t(event.description.en, event.description.zh)}
                  </p>

                  <button className={styles.registerBtn}>
                    {t('Register Now', '立即报名')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Past Events ─── */}
      <section className={`${styles.section} ${styles.pastSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>
              {t('Memories', '回忆')}
            </span>
            <h2>{t('Past Events', '往期活动')}</h2>
            <p>
              {t(
                'A look back at the wonderful moments we shared together.',
                '回顾我们一起分享的美好时光。'
              )}
            </p>
          </div>

          <div className={styles.pastGrid}>
            {pastEvents.map((event, index) => (
              <article
                key={event.id}
                className={styles.pastCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.pastImagePlaceholder}>
                  <div className={styles.pastImageIcon}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className={styles.pastOverlay}>
                    <span className={styles.attendeeBadge}>
                      👥 {event.attendees}+ {t('attended', '参加')}
                    </span>
                  </div>
                </div>
                <div className={styles.pastBody}>
                  <span className={styles.pastDate}>
                    {t(event.date.en, event.date.zh)}
                  </span>
                  <h3>{t(event.title.en, event.title.zh)}</h3>
                  <p>{t(event.description.en, event.description.zh)}</p>
                  <span className={styles.viewGalleryLink}>
                    {t('View Photos', '查看照片')} →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>{t('Want to Host an Event?', '想举办活动？')}</h2>
          <p>
            {t(
              'We love partnering with individuals and organizations to create meaningful community events.',
              '我们乐于与个人和组织合作，打造有意义的社区活动。'
            )}
          </p>
          <button className={styles.ctaBtn}>
            {t('Get in Touch', '联系我们')}
          </button>
        </div>
      </section>
    </main>
  );
}
