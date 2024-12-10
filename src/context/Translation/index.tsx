import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./language";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const languages = {
        en: { nativeName: 'English' },
        pt: { nativeName: 'Português' },
        es: { nativeName: 'Español' },
    };
    
    const { t, i18n } = useTranslation();
    
    const onClickLanguageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        const language = (event.target as HTMLButtonElement).value;
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
    }
    
    return (
        <LanguageContext.Provider
            value={{ t, i18n, onClickLanguageChange, languages }}
        >
            {children}
        </LanguageContext.Provider>
    );
}