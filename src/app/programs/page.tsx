'use client';

import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const programs = [
  {
    icon: '🎓',
    title: { en: 'Youth Education', zh: '青少年教育' },
    desc: {
      en: 'After-school tutoring, STEM workshops, college prep guidance, and scholarship programs designed to unlock every young person\'s potential.',
      zh: '课后辅导、STEM 工作坊、大学预备指导和奖学金项目，旨在释放每一位年轻人的潜力。',
    },
  },
  {
    icon: '🌏',
    title: { en: 'Cultural Bridge', zh: '文化桥梁' },
    desc: {
      en: 'Cross-cultural exchange events, language classes, and international dialogue forums that foster mutual understanding and friendship.',
      zh: '跨文化交流活动、语言课程和国际对话论坛，促进相互理解与友谊。',
    },
  },
  {
    icon: '💊',
    title: { en: 'Community Health', zh: '社区健康' },
    desc: {
      en: 'Free health screenings, mental wellness workshops, nutrition education, and partnerships with local clinics to ensure accessible care.',
      zh: '免费健康检查、心理健康工作坊、营养教育以及与当地诊所的合作，确保人人可及的医疗服务。',
    },
  },
  {
    icon: '🤗',
    title: { en: 'Senior Support', zh: '长者关爱' },
    desc: {
      en: 'Companion visits, digital literacy training, social gatherings, and resource navigation for elderly community members.',
      zh: '陪伴探访、数字素养培训、社交聚会和为老年社区成员提供资源导航。',
    },
  },
  {
    icon: '♻️',
    title: { en: 'Environmental Action', zh: '环保行动' },
    desc: {
      en: 'Community clean-ups, urban gardening, sustainability education, and green initiative advocacy for a healthier planet.',
      zh: '社区清洁、城市园艺、可持续发展教育和绿色倡议，为更健康的地球贡献力量。',
    },
  },
  {
    icon: '🎨',
    title: { en: 'Arts & Expression', zh: '艺术与表达' },
    desc: {
      en: 'Art therapy programs, music and dance classes, public installations, and creative showcases celebrating community talent.',
      zh: '艺术治疗项目、音乐和舞蹈课程、公共装置和创意展示，庆祝社区人才。',
    },
  },
];

const metrics = [
  {
    icon: '👥',
    value: '50,000+',
    label: { en: 'Lives Impacted', zh: '受益人数' },
  },
  {
    icon: '📍',
    value: '35+',
    label: { en: 'Communities Served', zh: '服务社区' },
  },
  {
    icon: '🤝',
    value: '2,500+',
    label: { en: 'Active Volunteers', zh: '活跃志愿者' },
  },
  {
    icon: '🏆',
    value: '200+',
    label: { en: 'Programs Completed', zh: '完成项目' },
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ProgramsPage() {
  const { t } = useI18n();

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.heroOrb} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t('Our ', '我们的')}<span className={styles.heroAccent}>{t('Programs', '项目')}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {t(
              'Empowering communities through innovative programs that educate, connect, and inspire lasting change.',
              '通过创新项目赋能社区，教育、连接并激发持久的改变。',
            )}
          </p>
          <nav className={styles.breadcrumb}>
            <a href="/">{t('Home', '首页')}</a>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>{t('Programs', '项目')}</span>
          </nav>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className={`${styles.section} ${styles.programsSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              {t('What We Do', '我们的工作')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('Programs & Initiatives', '项目与倡议')}
            </h2>
            <p className={styles.sectionDesc}>
              {t(
                'From education to environmental stewardship, our programs address the most pressing needs of the communities we serve.',
                '从教育到环境保护，我们的项目应对我们所服务社区最迫切的需求。',
              )}
            </p>
          </div>

          <div className={styles.programsGrid}>
            {programs.map((p, i) => (
              <div key={i} className={styles.programCard}>
                <div className={styles.programIcon}>{p.icon}</div>
                <h3 className={styles.programTitle}>{t(p.title.en, p.title.zh)}</h3>
                <p className={styles.programDesc}>{t(p.desc.en, p.desc.zh)}</p>
                <a className={styles.learnMore} href={`/programs#${p.title.en.toLowerCase().replace(/\s+/g, '-')}`}>
                  {t('Learn More', '了解更多')}
                  <span className={styles.learnMoreArrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <section className={`${styles.section} ${styles.impactSection}`}>
        <div className={styles.container}>
          <div className={styles.impactHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              {t('Our Impact', '我们的影响')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('Making a Measurable Difference', '创造可衡量的改变')}
            </h2>
            <p className={styles.sectionDesc}>
              {t(
                'Numbers tell a story of dedication. Here\'s how our work has transformed communities since 2010.',
                '数字讲述奉献的故事。以下是自2010年以来我们的工作如何改变社区。',
              )}
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <span className={styles.metricIcon}>{m.icon}</span>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{t(m.label.en, m.label.zh)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
