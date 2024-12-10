import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../Layout/Header/index';
import { useLanguage } from "../../context/Translation/language";
import "../../styles/views/settings.scss";

export default function Settings() {
    const { t } = useTranslation();
    const { onClickLanguageChange, languages } = useLanguage();

    const [babyInfo, setBabyInfo] = useState({
        baby: {
            name: "",
            birthDate: "",
            length: "",
            weight: ""
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBabyInfo((prev) => ({
            baby: {
                ...prev.baby,
                [name]: value
            }
        }));
    };

    const handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClickLanguageChange(event);
        console.log("Language changed to", event.currentTarget.value);
    }

    return (
        <div className="settings-container">
            <Header />
            <h1>{t("settings.title")}</h1>

            <div className="language-section">
                <h2>{t("settings.change_language")}</h2>
                {Object.keys(languages).map((lng) => (
                    <button
                        key={lng}
                        value={lng}
                        onClick={handleLanguageChange}
                        style={{ marginRight: "10px" }}
                    >
                        {languages[lng].nativeName}
                    </button>
                ))}
            </div>

            <div className="baby-info-section">
                <h2>{t("settings.baby_info.title")}</h2>
                <div>
                    <label>
                        {t("settings.baby_info.name.label")}:
                        <input
                            type="text"
                            name="name"
                            value={babyInfo.baby.name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        {t("settings.baby_info.birthDate.label")}:
                        <input
                            type="date"
                            name="birthDate"
                            value={babyInfo.baby.birthDate}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        {t("settings.baby_info.length.label")} (cm):
                        <input
                            type="number"
                            name="length"
                            value={babyInfo.baby.length}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        {t("settings.baby_info.weight.label")} (kg):
                        <input
                            type="number"
                            name="weight"
                            value={babyInfo.baby.weight}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}