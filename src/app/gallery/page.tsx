'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import styles from './page.module.css';

type Category = 'all' | 'events' | 'programs' | 'community';

interface GalleryItem {
  id: number;
  gradient: string;
  icon: string;
  category: Category;
  title: { en: string; zh: string };
  date: { en: string; zh: string };
}

const galleryItems: GalleryItem[] = [
  {
    id: 1, gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: '🎉', category: 'events',
    title: { en: 'Annual Gala 2025', zh: '2025年度晚会' },
    date: { en: 'December 2025', zh: '2025年12月' },
  },
  {
    id: 2, gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: '📚', category: 'programs',
    title: { en: 'Youth Mentorship Program', zh: '青年导师计划' },
    date: { en: 'November 2025', zh: '2025年11月' },
  },
  {
    id: 3, gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    icon: '🤝', category: 'community',
    title: { en: 'Community Outreach Day', zh: '社区外展日' },
    date: { en: 'October 2025', zh: '2025年10月' },
  },
  {
    id: 4, gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: '🎨', category: 'programs',
    title: { en: 'Art Workshop Series', zh: '艺术工作坊系列' },
    date: { en: 'September 2025', zh: '2025年9月' },
  },
  {
    id: 5, gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    icon: '🏃', category: 'events',
    title: { en: 'Charity Marathon', zh: '慈善马拉松' },
    date: { en: 'August 2025', zh: '2025年8月' },
  },
  {
    id: 6, gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    icon: '🌱', category: 'community',
    title: { en: 'Garden Project Launch', zh: '花园项目启动' },
    date: { en: 'July 2025', zh: '2025年7月' },
  },
  {
    id: 7, gradient: 'linear-gradient(135deg, #fccb90, #d57eeb)',
    icon: '🎶', category: 'events',
    title: { en: 'Cultural Music Festival', zh: '文化音乐节' },
    date: { en: 'June 2025', zh: '2025年6月' },
  },
  {
    id: 8, gradient: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
    icon: '📖', category: 'programs',
    title: { en: 'Reading Circle Initiative', zh: '读书会计划' },
    date: { en: 'May 2025', zh: '2025年5月' },
  },
  {
    id: 9, gradient: 'linear-gradient(135deg, #f5576c, #ff6a88)',
    icon: '🎭', category: 'community',
    title: { en: 'Theater Performance Night', zh: '戏剧表演之夜' },
    date: { en: 'April 2025', zh: '2025年4月' },
  },
  {
    id: 10, gradient: 'linear-gradient(135deg, #0acffe, #495aff)',
    icon: '🌍', category: 'events',
    title: { en: 'Global Unity Conference', zh: '全球团结大会' },
    date: { en: 'March 2025', zh: '2025年3月' },
  },
  {
    id: 11, gradient: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
    icon: '🧑‍🏫', category: 'programs',
    title: { en: 'Teacher Training Seminar', zh: '教师培训研讨会' },
    date: { en: 'February 2025', zh: '2025年2月' },
  },
  {
    id: 12, gradient: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    icon: '🎗️', category: 'community',
    title: { en: 'Volunteer Appreciation Day', zh: '志愿者感恩日' },
    date: { en: 'January 2025', zh: '2025年1月' },
  },
];

const categories: { key: Category; en: string; zh: string }[] = [
  { key: 'all', en: 'All', zh: '全部' },
  { key: 'events', en: 'Events', zh: '活动' },
  { key: 'programs', en: 'Programs', zh: '项目' },
  { key: 'community', en: 'Community', zh: '社区' },
];

export default function GalleryPage() {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const categoryLabel = (cat: Category): string => {
    const found = categories.find(c => c.key === cat);
    return found ? t(found.en, found.zh) : cat;
  };

  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            📸 {t('Our Gallery', '我们的画廊')}
          </div>
          <h1 className={styles.heroTitle}>
            {t('Moments That ', '定义我们')}<span>{t('Define Us', '的瞬间')}</span>
          </h1>
          <p className={styles.heroDesc}>
            {t(
              'Explore the vibrant moments from our events, programs, and community initiatives that bring people together.',
              '探索我们活动、项目和社区倡议中充满活力的瞬间，将人们聚集在一起。'
            )}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterTabs}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filterTab} ${activeFilter === cat.key ? styles.filterTabActive : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {t(cat.en, cat.zh)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.galleryItem}>
                <div
                  className={styles.galleryPlaceholder}
                  style={{ background: item.gradient }}
                >
                  <span className={styles.placeholderIcon}>{item.icon}</span>
                  <span className={styles.placeholderLabel}>
                    {t(item.title.en, item.title.zh)}
                  </span>
                </div>
                <div className={styles.galleryOverlay}>
                  <span className={styles.overlayCategory}>
                    {categoryLabel(item.category)}
                  </span>
                  <h3 className={styles.overlayTitle}>
                    {t(item.title.en, item.title.zh)}
                  </h3>
                  <span className={styles.overlayDate}>
                    {t(item.date.en, item.date.zh)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>{t('Photos Captured', '拍摄照片')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>{t('Events Documented', '记录活动')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1,000+</span>
            <span className={styles.statLabel}>{t('Smiles Shared', '分享笑容')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>{t('Communities Reached', '覆盖社区')}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
