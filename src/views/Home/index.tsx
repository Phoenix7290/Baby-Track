import Footer from "../../Layout/Footer";
import Header from '../../Layout/Header/index';
import "../../styles/views/home.scss";
import DashBoard from '../DashBoard/index';

export default function Home() {
    return (
        <div className="Home">
            <Header />
            <div>
                <DashBoard/>
            </div>
            <Footer />
        </div>
    );
}