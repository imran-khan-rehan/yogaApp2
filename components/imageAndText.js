import React from 'react';
import Image from 'next/image';
import yoga from '../public/images/manImage.webp'
const imageAndText = () => {
  return (
    <>
      <div className="container bg-white ">

        <div className="content">
          <div className="image-container w-[50%] ">
            <Image src={yoga} alt="Healing Session"  />
          </div>
          <div className="right-col w-[50%]">
            <div className="header-title mx-[100px] my-[80px] ">
              Acupuncture, Ayurveda, Sound Healing, Herbalists, and RMTs.
            </div>
            <div className="text-section mx-auto flex flex-col gap-7  w-[60%]">
              <p className=' ml-4 '>At M&A Wellness and Yoga, nestled in the heart of downtown Victoria, BC, we pride ourselves on being a collective of passionate yoga educators, certified health practitioners, and skilled healers. Our mission is to provide an inviting and nurturing atmosphere where students can delve into their wellness and yoga journey with a sense of safety and self-exploration.</p>
              <p className=' ml-4'>Our space features a holistic wellness clinic with four private treatment rooms and two beautiful yoga studios. Our amazing team of experienced practitioners are committed to guiding you on a transformative journey toward optimal well-being through integrated healing practices. To ensure accessibility to our community, we are open seven days a week and offer direct billing to most insurance providers.</p>
              <a href="path-to-services-page" className="button">Explore the Clinic</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default imageAndText;
