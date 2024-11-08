import { createContext, useContext } from 'react';
import { TFunction, i18n } from "i18next";

interface LanguageContextProps {
    t: TFunction;
    i18n: i18n;
    onClickLanguageChange: (lng: { target: { value: string; }; }) => void;
    languages: { [key: string]: { nativeName: string } };
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}