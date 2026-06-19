'use client';

import { useState, type FormEvent } from 'react';
import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

export default function VolunteerPage() {
  const { t } = useI18n();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    interests: [] as string[],
  });

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((v) => v !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with backend later
    alert(t('Thank you for signing up! We will be in touch soon.', '感谢您的报名！我们会尽快联系您。'));
  };

  /* --- data --- */
  const benefits = [
    {
      emoji: '🤝',
      title: t('Build Community', '建立社区'),
      desc: t(
        'Connect with passionate individuals who share your commitment to positive change and lifelong friendships.',
        '与志同道合的人建立联系，分享您对积极改变和终身友谊的承诺。'
      ),
    },
    {
      emoji: '🌟',
      title: t('Grow Your Skills', '提升技能'),
      desc: t(
        'Gain hands-on experience in leadership, teaching, event planning, and cross-cultural communication.',
        '获得领导力、教学、活动策划和跨文化交流方面的实践经验。'
      ),
    },
    {
      emoji: '💡',
      title: t('Create Lasting Impact', '创造持久影响'),
      desc: t(
        'Your time and talent directly transform lives — every hour you give ripples outward through communities.',
        '您的时间和才能直接改变生活——您付出的每一小时都会在社区中产生涟漪效应。'
      ),
    },
  ];

  const opportunities = [
    {
      emoji: '📖',
      title: t('Tutoring & Mentoring', '辅导与指导'),
      desc: t(
        'Work one-on-one or in small groups with students who need academic support and positive role models.',
        '与需要学术支持和积极榜样的学生进行一对一或小组合作。'
      ),
      time: t('4-6 hrs/week', '每周4-6小时'),
      location: t('On-site / Remote', '现场/远程'),
    },
    {
      emoji: '🎨',
      title: t('Arts & Culture Programs', '艺术与文化项目'),
      desc: t(
        'Help organize cultural exchange workshops, art classes, and community exhibitions.',
        '帮助组织文化交流研讨会、艺术课程和社区展览。'
      ),
      time: t('3-5 hrs/week', '每周3-5小时'),
      location: t('On-site', '现场'),
    },
    {
      emoji: '💻',
      title: t('Tech & Digital', '技术与数字'),
      desc: t(
        'Support our digital literacy programs, website development, and social media outreach.',
        '支持我们的数字素养计划、网站开发和社交媒体推广。'
      ),
      time: t('Flexible', '灵活安排'),
      location: t('Remote', '远程'),
    },
    {
      emoji: '🎉',
      title: t('Event Coordination', '活动协调'),
      desc: t(
        'Plan and execute fundraising galas, community picnics, and seasonal celebrations.',
        '策划和执行筹款晚会、社区野餐和季节性庆祝活动。'
      ),
      time: t('5-8 hrs/event', '每活动5-8小时'),
      location: t('On-site', '现场'),
    },
  ];

  const interestOptions = [
    { value: 'tutoring', label: t('Tutoring', '辅导') },
    { value: 'arts', label: t('Arts & Culture', '艺术与文化') },
    { value: 'tech', label: t('Tech & Digital', '技术与数字') },
    { value: 'events', label: t('Event Planning', '活动策划') },
    { value: 'fundraising', label: t('Fundraising', '筹款') },
    { value: 'translation', label: t('Translation', '翻译') },
  ];

  const testimonials = [
    {
      text: t(
        'Volunteering with LALOLI has been one of the most rewarding experiences of my life. Seeing the children light up during our sessions is priceless.',
        '在LALOLI做志愿者是我一生中最有价值的经历之一。看到孩子们在我们的课程中发光发亮，这是无价的。'
      ),
      name: t('Sarah Chen', '陈莎拉'),
      role: t('Tutor Volunteer, 2 years', '辅导志愿者，2年'),
      initials: 'SC',
    },
    {
      text: t(
        'I joined as a tech volunteer and ended up finding a second family. The community here is genuinely warm and supportive.',
        '我以技术志愿者的身份加入，最终找到了第二个家。这里的社区真的很温暖、很支持人。'
      ),
      name: t('Michael Park', '朴迈克'),
      role: t('Tech Volunteer, 1 year', '技术志愿者，1年'),
      initials: 'MP',
    },
    {
      text: t(
        'The cultural exchange programs opened my eyes to a whole new world. I grew as a person just as much as the students I helped.',
        '文化交流项目让我大开眼界。我和我帮助的学生一样成长了很多。'
      ),
      name: t('Amara Johnson', '约翰逊·阿玛拉'),
      role: t('Arts Volunteer, 3 years', '艺术志愿者，3年'),
      initials: 'AJ',
    },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEmoji}>🙌</span>
          <h1 className={styles.heroTitle}>
            {t('Join Our Mission', '加入我们的使命')}
          </h1>
          <p className={styles.heroSub}>
            {t(
              'Lend your time, talent, and heart. Together, we can build a brighter future for communities worldwide.',
              '贡献您的时间、才能和爱心。让我们携手为全球社区共建更美好的未来。'
            )}
          </p>
        </div>
      </section>

      {/* ===== WHY VOLUNTEER ===== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Why Volunteer With Us?', '为什么和我们一起做志愿者？')}</h2>
            <p>
              {t(
                'Volunteering isn\'t just giving — it\'s growing, connecting, and transforming.',
                '志愿服务不仅仅是付出——它是成长、连接和蜕变。'
              )}
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <div className={styles.benefitEmoji}>{b.emoji}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CURRENT OPPORTUNITIES ===== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Current Opportunities', '当前志愿机会')}</h2>
            <p>
              {t(
                'Find the perfect role that matches your skills and schedule.',
                '找到与您的技能和时间安排匹配的完美角色。'
              )}
            </p>
          </div>
          <div className={styles.oppsGrid}>
            {opportunities.map((opp) => (
              <div key={opp.title} className={styles.oppCard}>
                <div className={styles.oppHeader}>
                  <span className={styles.oppEmoji}>{opp.emoji}</span>
                  <h3>{opp.title}</h3>
                </div>
                <p className={styles.oppDesc}>{opp.desc}</p>
                <div className={styles.oppMeta}>
                  <span className={styles.oppTag}>🕐 {opp.time}</span>
                  <span className={styles.oppTag}>📍 {opp.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNUP FORM ===== */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2>{t('Sign Up to Volunteer', '报名成为志愿者')}</h2>
            <p className={styles.formSubtitle}>
              {t(
                'Fill out the form and we\'ll match you with the perfect opportunity.',
                '填写表格，我们会为您匹配最佳机会。'
              )}
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="vol-name">
                    {t('Full Name', '姓名')} *
                  </label>
                  <input
                    id="vol-name"
                    className={styles.formInput}
                    type="text"
                    required
                    placeholder={t('Your full name', '您的姓名')}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="vol-email">
                    {t('Email Address', '电子邮件')} *
                  </label>
                  <input
                    id="vol-email"
                    className={styles.formInput}
                    type="email"
                    required
                    placeholder={t('your@email.com', '您的邮箱地址')}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                {/* Interests */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel}>
                    {t('Areas of Interest', '感兴趣的领域')}
                  </label>
                  <div className={styles.checkboxGroup}>
                    {interestOptions.map((opt) => (
                      <label key={opt.value} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={form.interests.includes(opt.value)}
                          onChange={() => handleCheckbox(opt.value)}
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroupFull}>
                  <label className={styles.formLabel} htmlFor="vol-message">
                    {t('Tell Us About Yourself', '介绍一下您自己')}
                  </label>
                  <textarea
                    id="vol-message"
                    className={styles.formTextarea}
                    placeholder={t(
                      'Share your skills, availability, or anything you\'d like us to know…',
                      '分享您的技能、可用时间或任何您希望我们了解的信息…'
                    )}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formSubmit}>
                <button type="submit" className={styles.submitBtn}>
                  {t('Submit Application', '提交申请')} 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{t('Volunteer Stories', '志愿者故事')}</h2>
            <p>
              {t(
                'Hear from the amazing people who make our work possible.',
                '聆听那些让我们的工作成为可能的杰出人士的声音。'
              )}
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((test) => (
              <div key={test.name} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <p className={styles.testimonialText}>{test.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{test.initials}</div>
                  <div className={styles.authorInfo}>
                    <strong>{test.name}</strong>
                    <span>{test.role}</span>
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
