'use client';

import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const timeline = [
  {
    year: '2010',
    title: { en: 'Founded', zh: '成立' },
    desc: {
      en: 'LALOLI Pathway was established with a vision to bridge communities through compassion and education.',
      zh: '拉洛利基金会成立，致力于通过关爱和教育连接社区。',
    },
  },
  {
    year: '2013',
    title: { en: 'First Community Center', zh: '首个社区中心' },
    desc: {
      en: 'Opened our first community center, providing resources and programs for underserved families.',
      zh: '开设首个社区中心，为弱势家庭提供资源和项目。',
    },
  },
  {
    year: '2016',
    title: { en: 'Cultural Bridge Program', zh: '文化桥梁项目' },
    desc: {
      en: 'Launched the Cultural Bridge Program connecting diverse communities through arts and dialogue.',
      zh: '启动文化桥梁项目，通过艺术和对话连接多元社区。',
    },
  },
  {
    year: '2020',
    title: { en: '10th Anniversary', zh: '十周年' },
    desc: {
      en: 'Celebrated a decade of impact — 50,000 lives touched, 200+ community events organized.',
      zh: '庆祝成立十周年——影响50,000人，组织200+社区活动。',
    },
  },
  {
    year: '2024',
    title: { en: 'Global Expansion', zh: '全球拓展' },
    desc: {
      en: 'Expanded operations internationally, partnering with organizations in 12 countries.',
      zh: '将业务拓展至国际，与12个国家的组织合作。',
    },
  },
];

const values = [
  {
    icon: '❤️',
    title: { en: 'Compassion', zh: '关爱' },
    desc: {
      en: 'We lead with empathy and kindness in everything we do.',
      zh: '我们以同理心和善意引领一切行动。',
    },
  },
  {
    icon: '🤝',
    title: { en: 'Integrity', zh: '正直' },
    desc: {
      en: 'Transparency and accountability guide our every decision.',
      zh: '透明和责任指导我们每一个决定。',
    },
  },
  {
    icon: '📚',
    title: { en: 'Education', zh: '教育' },
    desc: {
      en: 'Knowledge is the foundation for lasting positive change.',
      zh: '知识是持久积极改变的基础。',
    },
  },
  {
    icon: '🏘️',
    title: { en: 'Community', zh: '社区' },
    desc: {
      en: 'Together we are stronger — every voice matters.',
      zh: '团结就是力量——每个声音都重要。',
    },
  },
  {
    icon: '🌍',
    title: { en: 'Diversity', zh: '多元' },
    desc: {
      en: 'We celebrate differences and build inclusive spaces for all.',
      zh: '我们赞美差异，为所有人创造包容空间。',
    },
  },
  {
    icon: '🌱',
    title: { en: 'Sustainability', zh: '可持续' },
    desc: {
      en: 'We invest in solutions that endure for future generations.',
      zh: '我们投资于为后代持续发展的解决方案。',
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb} />
        <div className={styles.heroOrb} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t('About ', '关于')}<span className={styles.heroAccent}>{t('Us', '我们')}</span>
          </h1>
          <nav className={styles.breadcrumb}>
            <a href="/">{t('Home', '首页')}</a>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>{t('About', '关于我们')}</span>
          </nav>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className={`${styles.section} ${styles.storySection}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            {t('Our Story', '我们的故事')}
          </div>
          <h2 className={styles.sectionTitle}>
            {t(
              'A Journey of Compassion & Community',
              '一段关于关爱与社区的旅程',
            )}
          </h2>

          <div className={styles.storyGrid}>
            {/* Left — narrative */}
            <div className={styles.storyText}>
              <p>
                {t(
                  'LALOLI Pathway began in 2010 as a small grassroots initiative with a bold dream: to build bridges of hope and understanding across communities. What started as a handful of volunteers has grown into a movement touching tens of thousands of lives around the world.',
                  '拉洛利基金会始于2010年的一个小型草根倡议，怀揣着一个大胆的梦想：在社区间架起希望与理解的桥梁。从最初的几名志愿者，已经发展成为影响全球数万人的运动。',
                )}
              </p>
              <p>
                {t(
                  'We believe that every individual, regardless of their background, deserves access to education, cultural enrichment, and the support of a caring community. Our programs are designed to empower, connect, and inspire lasting change.',
                  '我们相信，每个人，无论背景如何，都应该获得教育、文化丰富和关爱社区的支持。我们的项目旨在赋能、连接和激发持久的改变。',
                )}
              </p>
            </div>

            {/* Right — timeline */}
            <div className={styles.timeline}>
              {timeline.map((item) => (
                <div key={item.year} className={styles.timelineItem}>
                  <span className={styles.timelineDot} />
                  <div className={styles.timelineYear}>{item.year}</div>
                  <div className={styles.timelineTitle}>{t(item.title.en, item.title.zh)}</div>
                  <div className={styles.timelineDesc}>{t(item.desc.en, item.desc.zh)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className={`${styles.section} ${styles.mvSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelLine} />
            {t('What Drives Us', '我们的驱动力')}
          </div>
          <h2 className={styles.sectionTitle}>
            {t('Mission & Vision', '使命与愿景')}
          </h2>

          <div className={styles.mvGrid}>
            {/* Mission */}
            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>🎯</div>
              <h3 className={styles.mvTitle}>{t('Our Mission', '我们的使命')}</h3>
              <p className={styles.mvDesc}>
                {t(
                  'To empower underserved communities through education, cultural exchange, and compassionate service — creating sustainable pathways for a brighter future.',
                  '通过教育、文化交流和关爱服务赋能弱势社区——为更美好的未来创造可持续的道路。',
                )}
              </p>
            </div>

            {/* Vision */}
            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>🔭</div>
              <h3 className={styles.mvTitle}>{t('Our Vision', '我们的愿景')}</h3>
              <p className={styles.mvDesc}>
                {t(
                  'A world where every community thrives — connected by understanding, enriched by diversity, and united by shared hope for generations to come.',
                  '一个每个社区都蓬勃发展的世界——通过理解相连，因多元而丰富，因共同的希望而团结，世代相传。',
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className={`${styles.section} ${styles.valuesSection}`}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionLabelLine} />
              {t('What We Believe', '我们的信念')}
            </div>
            <h2 className={styles.sectionTitle}>
              {t('Our Core Values', '我们的核心价值观')}
            </h2>
            <p className={styles.sectionDesc}>
              {t(
                'These guiding principles shape every program, partnership, and decision we make.',
                '这些指导原则塑造了我们的每一个项目、合作和决策。',
              )}
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueTitle}>{t(v.title.en, v.title.zh)}</h4>
                <p className={styles.valueDesc}>{t(v.desc.en, v.desc.zh)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
