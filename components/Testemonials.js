import React from 'react';
import fcstyles from '../styles/Testemonials.module.css'; // Import your CSS file for styling


const Testemonials = () => {
  return (
    <div className={fcstyles.testemonials}>
        <div className={fcstyles.testmonialsContent}>
            <h3>Community Testemonials</h3>
            <div className={fcstyles.testemonialImage}><img src='/images/qoute.webp'></img></div>
            <p>MA has been, hands down the most wonderful studio I’ve been to. The vibe here is authentic, easy going and magical. How wonderful to practice yoga with the live sounds of crystal bowls, chimes and gongs! I love that the studio already has your mat and props cleaned and ready for you upon entry. No need to lug my mat around, or pay any additional rental mat fees. Speaking of fees, MA has the most affordable membership options and special student pricing. Victoria is so lucky to have this oasis. 
                Thank You for providing community, resources and peace of mind for all those who seek it.</p>
                <h5>KAYLA PERRIAD</h5>
        </div>
      
    </div>
  );
};

export default Testemonials;
