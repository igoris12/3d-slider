import React, { useEffect } from 'react';
import backgroundVideo from '../video/smoke-background-optimized.mp4';

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
        <div className="showcase__content">aaa</div>
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
