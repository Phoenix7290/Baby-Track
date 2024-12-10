import React, { createContext, useContext } from 'react';
import { i18n } from 'i18next';
import { TFunction } from 'i18next';

interface LanguageContextType {
  t: TFunction;
  i18n: i18n;
  onClickLanguageChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
  languages: {
    [key: string]: { nativeName: string }
  };
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};