import Header from '../components/Header';
import Footer from '../components/footer';
import FirstComponent from '@/components/FirstComponent';
import '../app/globals.css';
import Navbar from '../components/navbar';
import EndComponent from '@/components/EndCompnent';
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            <FirstComponent/>
            <EndComponent/>
            <Footer />
        </div>
    );
}
