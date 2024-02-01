import React from 'react';
import Image from 'next/image';
import yoga from '../public/images/yoga-2.webp'
const imageAndText = () => {
  return (
    <>
      <div className="container bg-white ">
        <div className="header-title ">
          Acupuncture, Ayurveda, Sound Healing, Herbalists, and RMTs.
        </div>
        <div className="content">
          <div className="left-col">
            <div className="image-container">
              <Image src={yoga} alt="Healing Session" />
            </div>
          </div>
          <div className="right-col">
            <div className="text-section">
              <p>At M&A Wellness and Yoga, nestled in the heart of downtown Victoria, BC, we pride ourselves on being a collective of passionate yoga educators, certified health practitioners, and skilled healers. Our mission is to provide an inviting and nurturing atmosphere where students can delve into their wellness and yoga journey with a sense of safety and self-exploration.</p>
              <p>Our space features a holistic wellness clinic with four private treatment rooms and two beautiful yoga studios. Our amazing team of experienced practitioners are committed to guiding you on a transformative journey toward optimal well-being through integrated healing practices. To ensure accessibility to our community, we are open seven days a week and offer direct billing to most insurance providers.</p>
              {/* Replace with the link to your services page */}
              <a href="path-to-services-page" className="button">Explore the Clinic</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default imageAndText;
