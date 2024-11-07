import { useLanguage } from "../../context/Translation/language";
import { Link } from "react-router-dom";

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div>
            <h1>{t("not_found")}</h1>
            <Link to="/Baby-Track/">{t("go_back_home")}</Link>
        </div>
    );
}