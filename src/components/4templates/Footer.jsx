import React from 'react';
import umbrella from '../../img/generalImage/umbrella.png';
import shield from '../../img/generalImage/shield.png';
import scan from '../../img/generalImage/scan.png';
import reward from '../../img/generalImage/reward.png';
import FooterLink from '../1atoms/FooterLinks';
export default function Footer() {
  return (
    <>
      <main id="mainFooter">
        <h1 className="poppins_medium_500"> More Details</h1>
        <footer>
          <section>
            <div className="logo">
              <img
                src={umbrella}
                alt="representation of suitable footer logo"
              />
            </div>

            <h3 className="poppins_medium_500"> General</h3>
            <ul>
              <FooterLink path={'https://google.com'} menuName={'LogIn'} />
              <FooterLink path={'https://google.com'} menuName={'Offers'} />
              <FooterLink path={'https://google.com'} menuName={'Register'} />
              <FooterLink path={'https://google.com'} menuName={'Services'} />
              <FooterLink path={'https://google.com'} menuName={'About Us'} />
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={reward} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> About Us</h3>
            <ul>
              <FooterLink path={'https://google.com'} menuName={'Plans'} />
              <FooterLink path={'https://google.com'} menuName={'Team'} />
              <FooterLink path={'https://google.com'} menuName={'Goals'} />
              <FooterLink path={'https://google.com'} menuName={'Services'} />
              <FooterLink path={'https://google.com'} menuName={'Policies'} />
              <FooterLink path={'https://google.com'} menuName={'Journey'} />
              <FooterLink path={'https://google.com'} menuName={'Services'} />
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={shield} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> Services</h3>

            <ul>
              <FooterLink
                path={'https://google.com'}
                menuName={'Rent House Platform '}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Food Ordering Platform'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Urgent Ambulance Call'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Direct Land Sale Platform'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Online Admission Platform'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Online Hospital Appointment'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'School Management Software'}
              />
            </ul>
          </section>
          <section>
            <div className="logo">
              <img src={scan} alt="representation of suitable footer logo" />
            </div>
            <h3 className="poppins_medium_500"> Contacts</h3>
            <ul>
              <FooterLink path={'https://google.com'} menuName={'Chat Live'} />
              <FooterLink
                path={'https://google.com'}
                menuName={'Our Advisors'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={' Care Support'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={' Email Contacts'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={' Email Contacts'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Technical Support'}
              />
              <FooterLink
                path={'https://google.com'}
                menuName={'Employees Contacts'}
              />
            </ul>
          </section>
        </footer>
        <div className="greyBox poppins_light_300">
          **IMPORTANT NOTICE: This platform is created by kshitiz & /* Copyright
          (C) Abian Company - All Rights Reserved Unauthorized copying of this
          site or the ideas , via any medium or in any way directly or
          indirectly is strictly prohibited Proprietary and confidential Written
          by Kshitiz Shahkshitiz.stha11@gmail.com, 4th March 2021 */
        </div>
      </main>
    </>
  );
}
