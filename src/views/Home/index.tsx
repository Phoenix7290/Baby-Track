import { useLanguage } from "../../context/Translation/language";
import Footer from "../../Layout/Footer";
import Header from '../../Layout/Header/index';
import "../../styles/views/home.scss";
import DashBoard from '../DashBoard/index';


export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="Home">
            <Header />
            <main >
                <section>
                    <h1>{t('Welcome to BabyTrack')}</h1>
                    <p>{t("Monitor your baby's growth and activities with ease.")}</p>
                </section>
                <section>
                    <h2>{t('Features')}</h2>
                    <ul>
                        <li>{t('Track milk intake')}</li>
                        <li>{t('Monitor weight (Kgs)')}</li>
                        <li>{t('Record date of birth')}</li>
                        <li>{t('Log sleep patterns')}</li>
                        <li>{t('And much more...')}</li>
                    </ul>
                </section>
                <section>
                    <DashBoard />
                </section>
            </main>
            <Footer />
        </div >
    );
}