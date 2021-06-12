import React from 'react';
import card1Image from '../../img/generalImage/card1.png';
import card2Image from '../../img/generalImage/card2.png';
import card3Image from '../../img/generalImage/card3.png';
import card4Image from '../../img/generalImage/card4.png';
import DoubtSectionCard from '../1atoms/DoubtSectionCard';

import AnimatedBlob from '../1atoms/AnimatedBlob';
export default function DoubtSection() {
  return (
    <section id="doubtSectionMain">
      <main id="doubtSection">
        {/* ----------------------------------------  */}
        <AnimatedBlob />
        {/* ----------------------------------------  */}
        <div id="leftSection">
          <h4 className="poppins_light_300">
            What Makes <br />
            <b className="poppins_medium_500">Abian</b> The <br />
            <b className="poppins_medium_500"> Best Place</b> To Find
            <br /> <b className="poppins_medium_500">Services</b> In Nepal?
          </h4>
        </div>
        <div id="rightSection">
          <div className="upperBlock">
            <DoubtSectionCard
              cardName={'card1'}
              cardImage={card1Image}
              cardHeader={'Build With Latest Technology'}
              cardContent={'All Our Services Are Created With Technologies.'}
            />
            <DoubtSectionCard
              cardName={'card2'}
              cardImage={card2Image}
              cardHeader={'People Trust Us'}
              cardContent={
                'People trust us as we provide secure services to our clients.'
              }
            />
          </div>
          <div className="upperBlock">
            <DoubtSectionCard
              cardName={'card3'}
              cardImage={card3Image}
              cardHeader={'Less Price'}
              cardContent="All our services are up of high quality and promising low
                prices."
            />
            <DoubtSectionCard
              cardName={'card4'}
              cardImage={card4Image}
              cardHeader={'Quality Services'}
              cardContent="Our Team are 24/7 a day available to reach out to you for help."
            />
          </div>
        </div>
      </main>
    </section>
  );
}
