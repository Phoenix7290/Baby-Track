import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextField } from '@mui/material';
import Header from '../../Layout/Header/index';
import { useLanguage } from "../../context/Translation/language";
import { useBabyContext } from '../../context/Global/avatar';
import DatePickerComponent from '../../components/Dates/DatePicker/index';
import "../../styles/views/settings.scss";
import { useNavigate } from 'react-router-dom';

export default function Settings() {
    const { t } = useTranslation();
    const { onClickLanguageChange, languages } = useLanguage();
    const { babyInfo, updateBabyInfo } = useBabyContext();
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updateBabyInfo({ [name]: value });
    };

    const handleDateChange = (date: Date | null) => {
        if (date) {
            updateBabyInfo({ 
                birthDate: date.toISOString().split('T')[0] 
            });
        }
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

            <div className="language-section">
                <h2>{t("settings.logout")}</h2>
                <button onClick={() => navigate("/Baby-Track/signin")}>{t("settings.logout")}</button>
            </div>

            <div className="baby-info-section">
                <h2>{t("settings.baby_info.title")}</h2>
                <div>
                    <TextField
                        label={t("settings.baby_info.name.label")}
                        name="name"
                        value={babyInfo.name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <div>
                    <DatePickerComponent
                        label={t("settings.baby_info.birthDate.label")}
                        value={babyInfo.birthDate ? new Date(babyInfo.birthDate) : null}
                        onChange={handleDateChange}
                    />
                </div>
                <div>
                    <TextField
                        label={`${t("settings.baby_info.length.label")} (cm)`}
                        name="length"
                        type="number"
                        value={babyInfo.length}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        label={`${t("settings.baby_info.weight.label")} (kg)`}
                        name="weight"
                        type="number"
                        value={babyInfo.weight}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                </div>
            </div>
        </div>
    );
}