import { useLanguage } from "../../context/Translation/language";
import { Link } from "react-router-dom";
import "../../styles/layout/header.scss";

export default function Header() {
    const { t } = useLanguage();

    return (
        <header>
            <hgroup>
                <h1>{t("header.title")}</h1>
            </hgroup>
            <nav>
                <ul>
                    <li>
                        <Link to="/Baby-Track/">{t("header.navigation.home")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/form">{t("header.navigation.form")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/settings">{t("header.navigation.settings")}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}