import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderMenu(props) {
  return (
    <>
      <li className="cursor poppins_regular_400">
        {(() => {
          if (props.method === 'withoutReactRouter') {
            return <a href={props.routePath}>{props.menuName}</a>;
          } else if (props.method === 'withReactRouter') {
            return (
              <Link to={props.routePath}>
                {props.menuName}

                {props.children}
              </Link>
            );
          }
        })()}
      </li>
    </>
  );
}
