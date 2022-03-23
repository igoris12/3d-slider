import 'swiper/css';
import React, { useEffect } from 'react';
import backgroundVideo from '../video/smoke-background-optimized.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShowcaseImageWrapper from './ShowcaseImageWrapper';
import img1 from '../img/1.png';
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
              autoplay="ture"
              slidesPerView={3}
              spaceBetween={40}
              loop="true"
              centeredSlides="true"
              speed={1800}
            >
              <SwiperSlide>
                <ShowcaseImageWrapper title="front" img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="front 2" img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="front" img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <ShowcaseImageWrapper title="front" img={img1} />
              </SwiperSlide>
            </Swiper>
          </div>
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
