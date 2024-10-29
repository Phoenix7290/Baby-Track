import Footer from "../../components/footer";
import Header from '../../components/header/index';
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