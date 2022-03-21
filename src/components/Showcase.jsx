import React, { useEffect } from 'react';
import backgroundVideo from '../video/smoke-background-optimized.mp4';

const Showcase = () => {
  useEffect(() => {
    const video = (document.querySelector('video').playbackRate = 2);
  }, []);

  return (
    <section className="showcase">
      <div className="showcase__content-wrapper">
        <div className="showcase__content">
          <video
            src={backgroundVideo}
            className="showcase__video"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
