import React from 'react';

export default function ServiceDescriptionType1(props) {
  return (
    <>
      <section
        className="serviceDescriptionSection"
        id="serviceDescriptionSection1"
      >
        <div className="leftSection">
          <img
            className="savingUI1"
            src={props.image}
            alt="representation of an illustartor"
          />
        </div>
        <div className="rightSection">
          <div className={props.hexagon}> </div>
          <h1>{props.title}</h1>

          <p>{props.description}</p>
        </div>
      </section>
    </>
  );
}
