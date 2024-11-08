import "../../styles/views/dashboard.scss";
import Alert from "../../components/FeedBack/Alert";
import Header from '../../Layout/Header/index';
import Footer from '../../Layout/Footer/index';
import { useLanguage } from "../../context/Translation/language";

export default function DashBoard() {
    const { t } = useLanguage();

    return (
        <div className="dashboard">
            <Header/>
            <main>
                <h1>{t("dashboard")}</h1>
                <Alert></Alert>
            </main>
            <Footer />
        </div>
    );
}