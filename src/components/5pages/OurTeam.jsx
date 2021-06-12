import { Redirect } from 'react-router-dom';

import React from 'react';
import telescopeImage from '../../img/ourTeam/telescopeImg.png';
import OurTeamCards from '../1atoms/OurTeamCards';
export default function OurTeam(props) {
  if (props.isLoggedInProps === 'false') {
    return (
      <main id="ourTeamPage">
        <section id="heroSection">
          <div>
            <h1 className="poppins_medium_500">Join our Team</h1>
            <h2 className="poppins_regular_400">
              Help us on our quest to make good software even better
            </h2>
            <button className="cursor joinBtn">
              <strong className="poppins_regular_400">JOIN</strong>
            </button>
          </div>
        </section>

        <hr />

        <div className="containerCenter">
          <div className="contentBlock">
            <section id="sectionTwo">
              <div id="leftDivision">
                <img src={telescopeImage} alt="" />
              </div>

              <div id="rightDivision">
                <h3 className="poppins_medium_500">
                  Where are you? We may just be there too.
                </h3>
                <p className="poppins_regular_400">
                  New York, Dublin, Ann Arbor,
                  <br />
                  floating on a boat in the Mediterranean Sea, behind
                  <br /> that tree: if there’s a good enough internet
                  connection,
                  <br /> one of our employees (maybe you) might be there.
                  <br />
                </p>
              </div>
            </section>
          </div>
        </div>

        <hr />

        <div className="containerCenter">
          <div className="contentBlock">
            <section id="teamInfoSection">
              {/* ------------- team cards  */}
              <OurTeamCards
                teamMemberImage="thirdTeamMember"
                content=" rem voluptates assumenda at deleniti molestias sed cumque
                    neque eveniet, dolorum nostrum dicta voluptas voluptate,
                    tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                    officiis quas velit aspernatur. Debitis, impedit vel!"
                teamMemberName="Kshitiz"
                teamMemberEducation="Bachelor"
              />
              <OurTeamCards
                teamMemberImage="thirdTeamMember"
                content=" rem voluptates assumenda at deleniti molestias sed cumque
                    neque eveniet, dolorum nostrum dicta voluptas voluptate,
                    tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                    officiis quas velit aspernatur. Debitis, impedit vel!"
                teamMemberName="Kshitiz"
                teamMemberEducation="Bachelor"
              />
              <OurTeamCards
                teamMemberImage="thirdTeamMember"
                content=" rem voluptates assumenda at deleniti molestias sed cumque
                    neque eveniet, dolorum nostrum dicta voluptas voluptate,
                    tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                    officiis quas velit aspernatur. Debitis, impedit vel!"
                teamMemberName="Kshitiz"
                teamMemberEducation="Bachelor"
              />
              <OurTeamCards
                teamMemberImage="thirdTeamMember"
                content=" rem voluptates assumenda at deleniti molestias sed cumque
                    neque eveniet, dolorum nostrum dicta voluptas voluptate,
                    tempora quaerat ad culpa voluptatem ut quibusdam dolor amet
                    officiis quas velit aspernatur. Debitis, impedit vel!"
                teamMemberName="Kshitiz"
                teamMemberEducation="Bachelor"
              />
            </section>
          </div>
        </div>
      </main>
    );
  } else {
    return <Redirect to="/welcomehome" />;
  }
}
