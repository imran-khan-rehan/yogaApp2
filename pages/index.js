import Header from '../components/Header';
import Footer from '../components/footer';
import FirstComponent from '@/components/FirstComponent';
import ImageAndText from '../components/imageAndText';
import '../app/globals.css';
import ClinicYoga from '@/components/clinicYoga';
import Navbar from '../components/navbar';
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            {/* <main>
                <h2>Home Page</h2>
            </main> */}
            <FirstComponent/>

            <ClinicYoga/>
            <Footer />
            {/* <ImageAndText/> */}
        </div>
    );
}

