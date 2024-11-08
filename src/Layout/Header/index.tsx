import { useLanguage } from "../../context/Translation/language";
import { Link } from "react-router-dom";
import "../../styles/layout/header.scss"

export default function Header() {
    const { t } = useLanguage();

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
                        <Link to="/Baby-Track/form">{t("form_title")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/settings">{t("settings")}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}