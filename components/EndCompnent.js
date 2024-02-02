import React from 'react';
import fcstyles from '../styles/EndComponent.module.css'; // Import your CSS file for styling


const EndComponent = () => {
  return (
    <div className={fcstyles.endSection}>
       <div className={fcstyles.endSectionContent}>
        <h2>MĀ Wellness and Yoga Online</h2> 
        <h3>Unlimited Online Classes</h3>
        <p>This platform allows you access to yoga classes, meditations, sound baths, wellness tutorials, and yoga education all online. 
            Here, the study of yoga and wellness can be done from the comfort of your living room.</p>
        <button className={fcstyles.signUpBtn}>SIGN-UP</button>

       </div>
       <div className={fcstyles.curvedBottom}></div>
    </div>
  );
};

export default EndComponent;
