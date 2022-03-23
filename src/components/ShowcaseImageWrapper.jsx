import React from 'react';

const ShowcaseImageWrapper = ({ img, title }) => {
  return (
    <div className="showcase__image__container">
      <div className="showcase__image__wrapper">
        <div className="showcase__image__left">
          <div
            className="showcase__image"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div className="showcase__image__right">
          {/* <div className="showcase__image"></div> */}
        </div>
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default ShowcaseImageWrapper;
