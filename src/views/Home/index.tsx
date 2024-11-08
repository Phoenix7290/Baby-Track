import { useLanguage } from "../../context/Translation/language";
import Footer from "../../Layout/Footer";
import Header from '../../Layout/Header/index';
import "../../styles/views/home.scss";

export default function Home() {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <div className="Home">
                <main >
                    <section>
                        <h1>{t('welcome')}</h1>
                        <p>{t("monitor_baby")}</p>
                    </section>
                    <section>
                        <h2>{t('features')}</h2>
                        <ul>
                            <li>{t('track_milk')}</li>
                            <li>{t('monitor_weight')}</li>
                            <li>{t('date_of_birth')}</li>
                            <li>{t('sleep')}</li>
                            <li>{t('etc')}</li>
                        </ul>
                    </section>
                </main>
            </div >
            <Footer />
        </>
    );
}