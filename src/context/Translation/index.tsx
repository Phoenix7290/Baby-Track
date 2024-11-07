import {
    ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./language";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const languages = {
        en: { nativveName: 'English' },
        'pt-BR': { nativveName: 'Português' },
    };
    const { t, i18n } = useTranslation();

    const onClickLanguageChange = (lng: { target: { value: string; }; }) => {
        const language = lng.target.value;
        i18n.changeLanguage(language);
    }

    return (
        <LanguageContext.Provider
        value={{ t, i18n, onClickLanguageChange, languages }}
      >
        {children}
      </LanguageContext.Provider>
    );
}

