'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { useState } from 'react';
import styles from './Header.module.css';

// TODO: Uncomment pages as they become ready
const navItems: { href: string; en: string; zh: string }[] = [
  // { href: '/about', en: 'About', zh: '关于我们' },
  // { href: '/programs', en: 'Programs', zh: '项目服务' },
  // { href: '/events', en: 'Events', zh: '活动日历' },
  // { href: '/news', en: 'News', zh: '新闻动态' },
  // { href: '/gallery', en: 'Gallery', zh: '图片集' },
  // { href: '/team', en: 'Team', zh: '团队成员' },
  // { href: '/volunteer', en: 'Volunteer', zh: '志愿服务' },
  // { href: '/donate', en: 'Donate', zh: '捐赠支持' },
  { href: '/donate', en: 'Donate', zh: '捐赠支持' },
  { href: '/contact', en: 'Contact', zh: '联系我们' },
];

export default function Header() {
  const { locale, toggleLocale, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo-horizontal.png"
            alt="LALOLI Pathway"
            width={160}
            height={50}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setMobileOpen(false)}
            >
              {t(item.en, item.zh)}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLocale}>
            {locale === 'en' ? '中文' : 'EN'}
          </button>
          <Link href="/donate" className={styles.donateBtn}>
            {t('Donate', '捐赠')}
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
