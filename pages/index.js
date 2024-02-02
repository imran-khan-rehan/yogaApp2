import Header from '../components/Header';
import Footer from '../components/footer';
import FirstComponent from '@/components/FirstComponent';
import '../app/globals.css';
import ClinicYoga from '@/components/clinicYoga';
import Navbar from '../components/navbar';
import Offerings from '@/components/Offerings';
import YogaTeacher from '@/components/YogaTeacher';
import Testemonials from '@/components/Testemonials';
import EndComponent from '@/components/EndCompnent';
export default function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            <FirstComponent/>
            <ClinicYoga/>
            <Offerings/>
            <YogaTeacher/>
            <Testemonials/>
            <EndComponent/>
            <Footer />
        </div>
    );
}

