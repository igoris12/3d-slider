import React from 'react';

const ShowcaseImageWrapper = ({ img, title }) => {
  return (
    <div className="showcase__image">
      <div className="showcase__image__wrapper">
        <div className="showcase__iamge__left">
          <div
            className="showcase__iamge"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div className="showcase__iamge__right">
          {/* <div className="showcase__iamge"></div> */}
        </div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default ShowcaseImageWrapper;
