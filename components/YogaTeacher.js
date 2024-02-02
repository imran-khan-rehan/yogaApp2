// Import necessary modules and images
import React from 'react';

import styles from '../styles/YogaTeacher.module.css'; // Import the CSS module

const YogaTeacher = () => {
    return (
        <div className={styles.yogaTeacherParent}>
            <div className={styles.curvedTop}></div>
            <h2>Yoga Teacher Training</h2>
            <div className={styles.yogaTeacher}>
                <div className={styles.yText}>
                    <h1>200 Hour Certified Immersive Training, Victoria BC.</h1>
                    <p>The MĀ Wellness and Yoga 200 hour yoga teacher training program in Victoria BC is an intensive journey into the heart of yoga practice. We provide an educational experience where students can fully immerse themselves into a yogic lifestyle.</p>
                    <button className={styles.button}>VIEW PROGRAMS</button>
                </div>
                <div className={styles.yImage}>
                    <img src="/images/ytImage.webp" alt="" />
                </div>
            </div>
            <div className={styles.curvedBottom}></div>
        </div>
    );
};

export default YogaTeacher;
