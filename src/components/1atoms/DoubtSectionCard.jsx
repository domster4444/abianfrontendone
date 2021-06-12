import React from 'react';

export default function DoubtSectionCard(props) {
  return (
    <>
      <div className="doutCards" id={props.cardName}>
        <img src={props.cardImage} alt="representation of icon" />
        <h4>{props.cardHeader}</h4>

        <p className="poppins_light_300">{props.cardContent}</p>
      </div>
    </>
  );
}
