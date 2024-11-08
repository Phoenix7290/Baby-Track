import { useLanguage } from "../../context/Translation/language";
import Header from "../../Layout/Header";

export default function Form() {
    const { t } = useLanguage();

    return (
        <div className="form">
            <Header/>
            <h1>{t("form_title")}</h1>
        </div>
    );
}