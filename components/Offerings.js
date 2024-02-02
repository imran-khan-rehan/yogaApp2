import React from 'react';
import fcstyles from '../styles/Offerings.module.css'; // Import your CSS file for styling


const Offerings = () => {
  return (
    <div className={fcstyles.offerings}>
        <div className={fcstyles.offeringsContent}>
            <h2>Our Offerings</h2>
            <div className={fcstyles.offeringCards}>
                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card1.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Yoga</h3>
                        <p>Yoga classes from beginner to advanced to help you expand your life and practice.</p>
                        <button>Learn More</button>
                    </div>
                </div>


                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card4.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Teacher Training</h3>
                        <p>Take a journey into the heart of yoga and immerse yourself into a yogic lifestyle.</p>
                        <button>Learn More</button>
                    </div>
                </div>


                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card2.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Workshops & Retreats</h3>
                        <p>Transform Your Practice and get in the flow with MĀ Yoga in Victoria, BC.</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card3.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Wellness Clinic</h3>
                        <p>Ayurvedic consultations, bodywork, registered massage therapy, and Chinese medicine.</p>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default Offerings;
