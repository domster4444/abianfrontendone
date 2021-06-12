import React from 'react';

export default function OurTeamCards(props) {
  return (
    <>
      <div className="card">
        <div className="leftDivision">
          <div className="sphereDivision">
            <div id={`${props.teamMemberImage}`} className="teamMember"></div>
          </div>
        </div>
        <div className="rightDivision">
          <p className="poppins_regular_400">{props.content}</p>
          <div className="container">
            <div className="left poppins_regular_400">
              <strong>{props.teamMemberName}</strong>
              <br />
              <p className="occupation">{props.teamMemberEducation}</p>
            </div>
            <div className="right poppins_medium_500">
              <a href="#">
                <svg
                  className="ArrowLink--arrowLink__svg--3LNWG"
                  viewBox="0 0 15 9"
                >
                  <path
                    d="M14.154 4.496l-3.797 3.797V5.146H.057v-1.3h10.3V.699z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
