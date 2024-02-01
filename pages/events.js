import Navbar from '../components/navbar';
import Footer from '../components/footer';
export default function Events() {
    return (
        <div>
            <Navbar />
            <main>
                <h2>Events Page</h2>
                <p>Bienvenue dans votre espace dédié au bien-être et à la forme après 60 ans 
                    ! Ici, découvrez des activités sportives, des conseils et des inspirations conçus spécialement pour les seniors actifs. 
                    Ensemble, célébrons une vie pleine de vitalité et de santé à tout âge.</p>

                {/* Plus de contenu ici sur les sports qu'on va metre sur le sites */}
            </main>
            <imageAndText/>
            <Footer />
        </div>
    );
}

