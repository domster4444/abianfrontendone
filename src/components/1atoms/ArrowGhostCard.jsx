import React from 'react';

export default function ArrowGhostCard(props) {
  return (
    <>
      <div className="AboutUs_WhyChooseUs_Card cursor">
        <div
          className={`AboutUs_WhyChooseUs_Card-Circles ${props.color}`}
        ></div>

        <h2 className="poppins_bold_700">{props.header}</h2>
        <p className="poppins_regular_400">{props.content}</p>
        <div className="arrowIconContainer">
          <img src={props.rightArrowImg} alt="right arrow logo" />
        </div>
      </div>
    </>
  );
}
