import { useLanguage } from "../../context/Translation/language";

export default function Form() {
    const { t } = useLanguage();

    return (
        <div>
            <h1>{t("Form")}</h1>
        </div>
    );
}