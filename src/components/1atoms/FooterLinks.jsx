import React from 'react';

export default function FooterLinks(props) {
  return (
    <>
      <a href={props.path}>
        <li className="poppins_light_300">{props.menuName}</li>
      </a>
    </>
  );
}
