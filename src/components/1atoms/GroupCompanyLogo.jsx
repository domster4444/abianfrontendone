import React from 'react';

export default function GroupCompanyLogo(props) {
  return (
    <>
      <div className="companyCard poppins_light_300">
        <img src={props.companyLogo} alt={props.companyinfo} />
      </div>
    </>
  );
}
