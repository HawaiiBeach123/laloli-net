'use client';

import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <Header />
      {/* Must match the header height in Header.module.css */}
      <main style={{ paddingTop: '120px' }}>{children}</main>
      <Footer />
    </I18nProvider>
  );
}
