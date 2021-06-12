import React from 'react';

export default function FeatCarouselCell(props) {
  return (
    <>
      <div className="carousel-cell" id={props.cardNumber}>
        <img
          className="mainCarouselIcons"
          src={props.carouselIcon}
          alt="representation of "
        />
        <img
          className="subCarouselIcons"
          src={props.subCarouselIcon}
          alt="representation of "
        />

        <h1>
          {props.upperContent}
          <br />
          {props.lowerContent}
        </h1>
      </div>
    </>
  );
}
