import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../../styles/components/header.scss"

export default function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <hgroup>
                <h1>{t("app_title")}</h1>
            </hgroup>
            <nav>
                <ul>
                    <li>
                        <Link to="/Baby-Track/">{t("home")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/signin">{t("signIn")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/signup">{t("signUp")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/settings">{t("settings")}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}