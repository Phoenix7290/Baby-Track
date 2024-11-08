import { useTranslation } from 'react-i18next';
import Header from '../../Layout/Header/index';

export default function Settings() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <h1>{t("settings")}</h1>
            
        </div>
    );
}