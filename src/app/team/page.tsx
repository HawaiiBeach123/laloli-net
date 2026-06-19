'use client';

import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

interface BoardMember {
  initials: string;
  gradient: string;
  name: { en: string; zh: string };
  title: { en: string; zh: string };
  bio: { en: string; zh: string };
}

interface StaffMember {
  initials: string;
  gradient: string;
  name: { en: string; zh: string };
  title: { en: string; zh: string };
  desc: { en: string; zh: string };
}

const boardMembers: BoardMember[] = [
  {
    initials: 'LW',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    name: { en: 'Linda Wang', zh: '王琳达' },
    title: { en: 'Chairperson', zh: '主席' },
    bio: {
      en: 'A passionate advocate for youth education and well-being, Linda founded LALOLI Pathway to bring the Laugh, Love, Live philosophy to communities.',
      zh: '凭借20年的非营利组织领导经验，琳达为LALOLI Pathway带来了战略远见和深厚的社区联系。'
    },
  },
  {
    initials: 'JC',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    name: { en: 'James Chen', zh: '陈建明' },
    title: { en: 'Vice Chair', zh: '副主席' },
    bio: {
      en: 'A renowned educator and advocate for youth development, James oversees our educational programs and partnerships.',
      zh: '作为著名的教育家和青年发展倡导者，建明负责监督我们的教育项目和合作关系。'
    },
  },
  {
    initials: 'SR',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    name: { en: 'Sarah Robinson', zh: '罗宾逊·萨拉' },
    title: { en: 'Treasurer', zh: '财务主管' },
    bio: {
      en: 'A CPA with expertise in nonprofit finance, Sarah ensures fiscal responsibility and transparent reporting.',
      zh: '作为精通非营利财务的注册会计师，萨拉确保财务责任和透明报告。'
    },
  },
  {
    initials: 'MZ',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    name: { en: 'Michael Zhang', zh: '张明' },
    title: { en: 'Secretary', zh: '秘书长' },
    bio: {
      en: 'An attorney specializing in immigration law, Michael provides legal guidance and oversees governance.',
      zh: '作为专门从事移民法的律师，明为基金会提供法律指导和治理监督。'
    },
  },
];

const staffMembers: StaffMember[] = [
  {
    initials: 'AT',
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    name: { en: 'Amy Torres', zh: '托雷斯·艾米' },
    title: { en: 'Executive Director', zh: '执行总监' },
    desc: { en: 'Leads day-to-day operations and strategy', zh: '领导日常运营和战略' },
  },
  {
    initials: 'DL',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    name: { en: 'David Liu', zh: '刘大卫' },
    title: { en: 'Program Manager', zh: '项目经理' },
    desc: { en: 'Manages educational and cultural programs', zh: '管理教育和文化项目' },
  },
  {
    initials: 'RK',
    gradient: 'linear-gradient(135deg, #fccb90, #d57eeb)',
    name: { en: 'Rachel Kim', zh: '金瑞秋' },
    title: { en: 'Community Coordinator', zh: '社区协调员' },
    desc: { en: 'Builds community partnerships and outreach', zh: '建立社区伙伴关系和外展' },
  },
  {
    initials: 'TH',
    gradient: 'linear-gradient(135deg, #0acffe, #495aff)',
    name: { en: 'Tom Huang', zh: '黄涛' },
    title: { en: 'Development Officer', zh: '发展官员' },
    desc: { en: 'Leads fundraising and donor relations', zh: '领导筹款和捐助者关系' },
  },
  {
    initials: 'NP',
    gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    name: { en: 'Nina Patel', zh: '帕特尔·尼娜' },
    title: { en: 'Communications Lead', zh: '传播负责人' },
    desc: { en: 'Handles marketing and public relations', zh: '负责营销和公共关系' },
  },
  {
    initials: 'EW',
    gradient: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
    name: { en: 'Eric Wu', zh: '吴振宇' },
    title: { en: 'Volunteer Manager', zh: '志愿者经理' },
    desc: { en: 'Recruits and coordinates volunteer teams', zh: '招募和协调志愿者团队' },
  },
];

const values = [
  {
    icon: '💡',
    title: { en: 'Innovation', zh: '创新' },
    desc: { en: 'We embrace creative solutions to address community challenges and drive meaningful change.', zh: '我们拥抱创造性解决方案，应对社区挑战并推动有意义的变革。' },
  },
  {
    icon: '🤝',
    title: { en: 'Collaboration', zh: '协作' },
    desc: { en: 'Together we achieve more — we believe in the power of diverse perspectives working in harmony.', zh: '团结就是力量——我们相信多元视角和谐共处的力量。' },
  },
  {
    icon: '❤️',
    title: { en: 'Compassion', zh: '同理心' },
    desc: { en: 'Every action we take is guided by empathy, understanding, and a genuine desire to help others.', zh: '我们的每一个行动都以同理心、理解和真诚的助人愿望为指导。' },
  },
];

export default function TeamPage() {
  const { t } = useI18n();

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            👥 {t('Our People', '我们的团队')}
          </div>
          <h1 className={styles.heroTitle}>
            {t('Meet the ', '认识我们')}<span>{t('Team', '的团队')}</span>
          </h1>
          <p className={styles.heroDesc}>
            {t(
              'Passionate individuals dedicated to building bridges of hope and creating lasting impact in our communities.',
              '充满热情的人们致力于搭建希望之桥，在我们的社区中创造持久的影响。'
            )}
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className={styles.boardSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2>{t('Board of Directors', '董事会')}</h2>
            <p>
              {t(
                'Our board provides strategic leadership and ensures our mission reaches those who need it most.',
                '我们的董事会提供战略领导，确保我们的使命惠及最需要的人。'
              )}
            </p>
          </div>
          <div className={styles.boardGrid}>
            {boardMembers.map((member) => (
              <div key={member.initials} className={styles.boardCard}>
                <div
                  className={styles.avatar}
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <h3 className={styles.memberName}>
                  {t(member.name.en, member.name.zh)}
                </h3>
                <p className={styles.memberTitle}>
                  {t(member.title.en, member.title.zh)}
                </p>
                <p className={styles.memberBio}>
                  {t(member.bio.en, member.bio.zh)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className={styles.staffSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2>{t('Our Staff', '我们的员工')}</h2>
            <p>
              {t(
                'The dedicated team that brings our programs and initiatives to life every day.',
                '这支敬业的团队每天将我们的项目和倡议变为现实。'
              )}
            </p>
          </div>
          <div className={styles.staffGrid}>
            {staffMembers.map((member) => (
              <div key={member.initials} className={styles.staffCard}>
                <div
                  className={styles.staffAvatar}
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <div className={styles.staffInfo}>
                  <h4 className={styles.staffName}>
                    {t(member.name.en, member.name.zh)}
                  </h4>
                  <p className={styles.staffTitle}>
                    {t(member.title.en, member.title.zh)}
                  </p>
                  <p className={styles.staffDesc}>
                    {t(member.desc.en, member.desc.zh)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2>{t('Our Values', '我们的价值观')}</h2>
            <p>
              {t(
                'The principles that guide everything we do.',
                '指导我们一切工作的原则。'
              )}
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>
                  {t(value.title.en, value.title.zh)}
                </h3>
                <p className={styles.valueDesc}>
                  {t(value.desc.en, value.desc.zh)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {t('Join Our Team', '加入我们的团队')}
          </h2>
          <p className={styles.ctaDesc}>
            {t(
              'We\'re always looking for passionate individuals who want to make a difference. Explore opportunities to join LALOLI Pathway.',
              '我们一直在寻找有热情、想要改变世界的人。探索加入LALOLI Pathway的机会。'
            )}
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className="btn btn-primary">
              {t('View Openings', '查看职位')} →
            </a>
            <a href="/contact" className="btn btn-secondary">
              {t('Volunteer With Us', '与我们一起志愿服务')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
