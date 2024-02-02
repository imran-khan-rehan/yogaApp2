import Header from '../components/Header';
import Footer from '../components/footer';
import '../app/globals.css';
import Navbar from '../components/navbar';
import Offerings from '@/components/Offerings';
import EndComponent from '@/components/EndCompnent';
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            <Offerings/>
            <EndComponent/>
            <Footer />
        </div>
    );
}
