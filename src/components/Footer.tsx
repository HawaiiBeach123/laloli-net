'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,0 L0,0 Z" fill="var(--color-bg)" />
        </svg>
      </div>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/images/logo-badge.png"
                alt="LALOLI Pathway"
                width={70}
                height={70}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>LALOLI Pathway</span>
            </div>
            <p className={styles.tagline}>
              {t(
                'Empowering children and young adults through education and well-being. Laugh, Love, Live.',
                '通过教育和身心健康赋能儿童和青年。笑着，爱着，活着。'
              )}
            </p>
          </div>

          {/* TODO: re-add links here as pages go live (Programs, Events, News, Gallery, Volunteer, Team) */}
          <div className={styles.linkGroup}>
            <h4>{t('Quick Links', '快速链接')}</h4>
            <Link href="/about">{t('About Us', '关于我们')}</Link>
            <Link href="/donate">{t('Donate', '捐赠支持')}</Link>
            <Link href="/contact">{t('Contact Us', '联系我们')}</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>{t('Contact', '联系方式')}</h4>
            <p>📧 info@laloli.net</p>
            <p>📞 (408) 892-6366</p>
            <p>📍 Cupertino, CA</p>
            <p>🌺 Keaau, HI</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} LALOLI Pathway Inc. {t('All rights reserved.', '版权所有。')}</p>
          {/* TODO: add social icons back here once real profiles exist */}
        </div>
      </div>
    </footer>
  );
}
