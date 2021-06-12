import React from 'react';
import firstGroupCompany from '../../img/partner/partner1.svg';
import secondGroupCompany from '../../img/partner/partner2.svg';

import GroupCompanyLogo from '../1atoms/GroupCompanyLogo';
export default function GroupCompaniesListSection() {
  return (
    <section className="containerCenter" id="groupCompaniesListSection">
      <div className="contentBlock" id="groupCompaniesListSection">
        <div id="leftSection">
          <div className="companyCard poppins_regular_400">Group Companies</div>
        </div>

        <div id="rightSection">
          <GroupCompanyLogo
            companyLogo={firstGroupCompany}
            companyinfo={'representaion of company card logo'}
          />
          <GroupCompanyLogo
            companyLogo={secondGroupCompany}
            companyinfo={'representaion of company card logo'}
          />

          <GroupCompanyLogo
            companyLogo={firstGroupCompany}
            companyinfo={'representaion of company card logo'}
          />
          <GroupCompanyLogo
            companyLogo={secondGroupCompany}
            companyinfo={'representaion of company card logo'}
          />
        </div>
      </div>
    </section>
  );
}
