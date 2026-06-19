'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

type Locale = 'en' | 'zh';

interface I18nContextType {
  locale: Locale;
  toggleLocale: () => void;
  t: (en: string, zh: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  toggleLocale: () => {},
  t: (en: string) => en,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const toggleLocale = useCallback(() => {
    setLocale(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  const t = useCallback((en: string, zh: string) => {
    return locale === 'en' ? en : zh;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
