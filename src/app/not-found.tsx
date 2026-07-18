'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <section
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'var(--space-2xl, 4rem) var(--space-lg, 1.5rem)',
        background: 'var(--color-bg)',
      }}
    >
      <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🌱</div>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'var(--color-primary)',
          marginBottom: '0.75rem',
        }}
      >
        {t('Page Not Found', '页面未找到')}
      </h1>
      <p
        style={{
          maxWidth: '420px',
          color: 'var(--color-primary-light)',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}
      >
        {t(
          "The page you're looking for doesn't exist or may still be under construction.",
          '您访问的页面不存在，或者仍在建设中。'
        )}
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary">
          {t('Back to Home', '返回首页')} →
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          {t('Contact Us', '联系我们')}
        </Link>
      </div>
    </section>
  );
}
