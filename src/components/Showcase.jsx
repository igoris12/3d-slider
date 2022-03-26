import React, { useEffect } from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import backgroundVideo from '../video/smoke-background-optimized.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import ShowcaseImageWrapper from './ShowcaseImageWrapper';
const Showcase = () => {
  useEffect(() => {
    const video = (document.querySelector('video').playbackRate = 2);
  }, []);

  return (
    <section className="showcase">
      <h2 className="showcase__header">
        Hoodie <span>Mantle</span>
      </h2>
      <div className="showcase__content-wrapper">
        <div className="showcase__content">
          <div className="showcase__carousel">
            <Swiper
              // loop="true"
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              slidesPerView={3}
              spaceBetween={40}
              centeredSlides="true"
              speed={1800}
              navigation={{
                nextEl: '.showcase__navigation_next',
                prevEl: '.showcase__navigation_prev',
              }}
            >
              <SwiperSlide>
                <ShowcaseImageWrapper title="Front" img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="Front Two" img={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="Side" img={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="Back" img={img4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="showcase__navigation">
          <div className="showcase__navigation_prev"></div>
          <div className="showcase__navigation_next"></div>
        </div>
      </div>
      <video
        src={backgroundVideo}
        className="showcase__video"
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default Showcase;
