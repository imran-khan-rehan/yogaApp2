import React from 'react';
import fcstyles from '../styles/FirstComponent.module.css'; // Import your CSS file for styling

const FirstComponent = () => {
  return (
    <div className={fcstyles.firstComponent}>
      <div className={fcstyles.firstComponentContent}>
        <div className={fcstyles.leftColumn}>
            <div className={fcstyles.leftColumnContent}>
                <h2>New to Our Studio?</h2>
                <p>If you’re new to MĀ Wellness and Yoga, we’d love to help you get started on your yoga journey. 
                  Click the button below to find out more information about our studio, classes,
                   and special offers for new members.</p>
              
                <button>Button 1</button>
                <button>Button 2</button>
                <h2>Try Our 30 Day Intro Special</h2>
          
            </div>
        </div>

        
        <div className={fcstyles.rightColumn}>
            <div className={fcstyles.imageOverlay}>
        
            <div className={fcstyles.image1}>
                <img src="/images/yoga-2.webp" alt="Image 1" />
            </div>
            
            <div className={fcstyles.image2}>
                <img src="/images/yoga-1.webp" alt="Image 2"/>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
