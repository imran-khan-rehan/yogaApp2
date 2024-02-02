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
                        <h3>Teacher Training</h3>
                        <p>Yoga classes from beginner to advanced to help you expand your life and practice.</p>
                        <button>Learn More</button>
                    </div>
                </div>


                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card1.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Teacher Training</h3>
                        <p>Yoga classes from beginner to advanced to help you expand your life and practice.</p>
                        <button>Learn More</button>
                    </div>
                </div>


                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card1.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Teacher Training</h3>
                        <p>Yoga classes from beginner to advanced to help you expand your life and practice.</p>
                        <button>Learn More</button>
                    </div>
                </div>

                <div className={fcstyles.card}>
                    <div className={fcstyles.cardImage}>
                        <img src='/images/card1.webp'></img>
                    </div>
                    <div className={fcstyles.cardDetails}>
                        <h3>Teacher Training</h3>
                        <p>Yoga classes from beginner to advanced to help you expand your life and practice.</p>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  );
};

export default Offerings;
