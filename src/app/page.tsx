'use client';

import styles from './page.module.css';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.floatingShape} ${styles.shape1}`} />
        <div className={`${styles.floatingShape} ${styles.shape2}`} />
        <div className={`${styles.floatingShape} ${styles.shape3}`} />
        <div className={`${styles.floatingShape} ${styles.shape4}`} />
        <div className={`${styles.floatingShape} ${styles.shape5}`} />

        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>
            ✦ {t('LALOLI Pathway', 'LALOLI Pathway')}
          </span>

          <h1 className={styles.heroTitle}>
            {t('Empowering Youth to', '赋能青少年')}{' '}
            <span className={styles.heroTitleAccent}>
              {t('Laugh, Love, Live', '笑着，爱着，活着')}
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            {t(
              'LALOLI Pathway empowers children and young adults through accessible education, mental health support, mentorship, and AI-driven learning tools — nurturing intellectual growth and emotional well-being.',
              'LALOLI Pathway 通过优质教育、心理健康支持、导师辅导和AI学习工具赋能儿童和青年——培养智力成长和情感幸福。'
            )}
          </p>

          <div className={styles.heroCtas}>
            <Link href="/about" className="btn btn-primary">
              {t('Learn More', '了解更多')} →
            </Link>
            <Link href="/donate" className="btn btn-secondary">
              {t('Donate Now', '立即捐赠')} ♡
            </Link>
          </div>
        </div>

        <div className={styles.heroScrollIndicator}>↓</div>
      </section>

      {/* ==================== IMPACT STATS ==================== */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {[
              {
                icon: '❤️',
                number: '10,000+',
                label: t('Lives Impacted', '受益人数'),
              },
              {
                icon: '📚',
                number: '50+',
                label: t('Programs Launched', '已启动项目'),
              },
              {
                icon: '🤝',
                number: '200+',
                label: t('Active Volunteers', '活跃志愿者'),
              },
              {
                icon: '🏆',
                number: '15',
                label: t('Years of Service', '年服务历程'),
              },
            ].map((stat, i) => (
              <div className={styles.statCard} key={i}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MISSION PREVIEW ==================== */}
      <section className={styles.missionSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            {t('What We Do', '我们的使命')}
          </span>
          <h2 className={styles.sectionTitle}>
            {t('Our Core Pillars', '三大核心领域')}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t(
              'We focus on three interconnected areas to create meaningful, sustainable change in communities around the world.',
              '我们聚焦三大相互关联的领域，在世界各地的社区创造有意义、可持续的改变。'
            )}
          </p>
        </div>

        <div className={styles.missionGrid}>
          {[
            {
              icon: '🎓',
              title: t('Education & AI Learning', '教育与AI学习'),
              desc: t(
                'Providing accessible educational resources and AI-driven learning tools that help children and young adults reach their full academic potential.',
                '提供优质教育资源和AI驱动的学习工具，帮助儿童和青年充分发挥学术潜力。'
              ),
            },
            {
              icon: '💚',
              title: t('Mental Health & Well-being', '心理健康与幸福'),
              desc: t(
                'Ensuring a balanced approach to personal development through mental health support, emotional wellness programs, and counseling resources.',
                '通过心理健康支持、情感健康计划和咨询资源，确保个人发展的平衡方式。'
              ),
            },
            {
              icon: '🌱',
              title: t('Mentorship & Growth', '导师辅导与成长'),
              desc: t(
                'Guiding individuals through challenges and opportunities with innovative mentorship programs, environmental initiatives, and life skills training.',
                '通过创新的导师计划、环保倡议和生活技能培训，引导个人应对挑战和把握机遇。'
              ),
            },
          ].map((item, i) => (
            <div className={styles.missionCard} key={i}>
              <div className={styles.missionIconWrap}>{item.icon}</div>
              <h3 className={styles.missionCardTitle}>{item.title}</h3>
              <p className={styles.missionCardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED PROGRAMS ==================== */}
      <section className={styles.programsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            {t('Featured Programs', '精选项目')}
          </span>
          <h2 className={styles.sectionTitle}>
            {t('Making a Difference', '创造改变')}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t(
              'Explore our flagship programs that are transforming lives and building stronger communities.',
              '探索我们正在改变生活、建设更强大社区的旗舰项目。'
            )}
          </p>
        </div>

        <div className={styles.programsGrid}>
          {[
            {
              emoji: '🤖',
              tag: t('AI Education', 'AI教育'),
              title: t('AI-Powered Learning Hub', 'AI学习中心'),
              desc: t(
                'Cutting-edge AI tutoring tools and personalized learning paths that adapt to each student\'s pace and style.',
                '前沿AI辅导工具和个性化学习路径，适应每个学生的节奏和风格。'
              ),
              color: 'linear-gradient(135deg, #1a2744, #2d4a7a)',
            },
            {
              emoji: '🧠',
              tag: t('Mental Health', '心理健康'),
              title: t('Youth Wellness Program', '青少年身心健康计划'),
              desc: t(
                'Counseling, peer support groups, and emotional resilience workshops designed specifically for K-12 students.',
                '专为K-12学生设计的心理咨询、同伴支持小组和情感韧性工作坊。'
              ),
              color: 'linear-gradient(135deg, #2d4a7a, #3a6db5)',
            },
            {
              emoji: '🌿',
              tag: t('Environment', '环保'),
              title: t('Green Leaders Initiative', '绿色领袖计划'),
              desc: t(
                'Environmental education and hands-on sustainability projects that empower youth to become stewards of the planet.',
                '环境教育和实践可持续发展项目，赋能青年成为地球的守护者。'
              ),
              color: 'linear-gradient(135deg, #1e3355, #253d66)',
            },
          ].map((program, i) => (
            <div className={styles.programCard} key={i}>
              <div
                className={styles.programCardImage}
                style={{ background: program.color }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {program.emoji}
                </span>
              </div>
              <div className={styles.programCardBody}>
                <span className={styles.programTag}>{program.tag}</span>
                <h3 className={styles.programCardTitle}>{program.title}</h3>
                <p className={styles.programCardDesc}>{program.desc}</p>
                <Link href="/programs" className={styles.programLink}>
                  {t('Learn More', '了解更多')} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== LATEST NEWS ==================== */}
      <section className={styles.newsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>
            {t('Latest News', '最新动态')}
          </span>
          <h2 className={styles.sectionTitle}>
            {t('Stories of Impact', '影响力故事')}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t(
              'Stay updated with the latest stories, events, and milestones from our community.',
              '关注来自我们社区的最新故事、活动和里程碑。'
            )}
          </p>
        </div>

        <div className={styles.newsGrid}>
          {[
            {
              emoji: '🎉',
              date: t('June 12, 2026', '2026年6月12日'),
              title: t(
                'Annual Gala Raises Record $500K for Education',
                '年度晚宴筹集创纪录50万美元用于教育'
              ),
              excerpt: t(
                'Our 2026 Annual Gala brought together over 400 guests and raised a record-breaking amount for our scholarship fund.',
                '我们的2026年度晚宴汇聚了400多位嘉宾，为奖学金基金筹集了创纪录的金额。'
              ),
              bg: 'linear-gradient(135deg, #1a2744, #d4a843)',
            },
            {
              emoji: '🌱',
              date: t('May 28, 2026', '2026年5月28日'),
              title: t(
                'New Community Garden Opens in Downtown',
                '市中心社区花园正式开放'
              ),
              excerpt: t(
                'The LALOLI Community Garden is now open, providing fresh produce and green space to over 200 local families.',
                '乐荔社区花园现已开放，为200多个本地家庭提供新鲜农产品和绿色空间。'
              ),
              bg: 'linear-gradient(135deg, #2d4a7a, #48bb78)',
            },
            {
              emoji: '🤝',
              date: t('May 10, 2026', '2026年5月10日'),
              title: t(
                'Partnership with Global Education Alliance',
                '与全球教育联盟建立合作伙伴关系'
              ),
              excerpt: t(
                'We are thrilled to announce our partnership with GEA, expanding our reach to 5 new countries this year.',
                '我们很高兴地宣布与GEA建立合作，今年将把我们的影响力扩展到5个新国家。'
              ),
              bg: 'linear-gradient(135deg, #253d66, #2a5298)',
            },
          ].map((news, i) => (
            <div className={styles.newsCard} key={i}>
              <div className={styles.newsCardImage}>
                <div
                  className={styles.newsImagePlaceholder}
                  style={{ background: news.bg }}
                >
                  {news.emoji}
                </div>
              </div>
              <div className={styles.newsCardBody}>
                <span className={styles.newsDate}>{news.date}</span>
                <h3 className={styles.newsCardTitle}>{news.title}</h3>
                <p className={styles.newsExcerpt}>{news.excerpt}</p>
                <Link href="/news" className={styles.newsReadMore}>
                  {t('Read More', '阅读更多')} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaDecor1} />
        <div className={styles.ctaDecor2} />

        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('Join Our Mission', '加入我们的使命')}
          </h2>
          <p className={styles.ctaSubtitle}>
            {t(
              'Whether you volunteer, donate, or spread the word — every action creates a ripple of positive change.',
              '无论您是志愿服务、捐赠还是传播信息 — 每一个行动都会创造积极改变的涟漪。'
            )}
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/volunteer" className="btn btn-primary">
              {t('Become a Volunteer', '成为志愿者')} →
            </Link>
            <Link href="/donate" className="btn btn-secondary">
              {t('Make a Donation', '进行捐赠')} ♡
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
