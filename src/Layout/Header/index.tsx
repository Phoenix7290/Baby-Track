import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../styles/layout/header.scss";

export default function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <hgroup>
                <h1>{t("header.title")}</h1>
            </hgroup>
            <nav>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>
                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/Baby-Track/">{t("header.navigation.home")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/dashboard">{t("header.navigation.dashboard")}</Link>
                    </li>
                    <li>
                        <Link to="/Baby-Track/settings">{t("header.navigation.settings")}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
