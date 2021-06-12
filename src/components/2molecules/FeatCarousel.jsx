import React from 'react';

import carouselIcon1 from '../../img/carouselIcon/first.png';
import carouselIcon2 from '../../img/carouselIcon/second.png';
import carouselIcon3 from '../../img/carouselIcon/third.png';
import carouselIcon4 from '../../img/carouselIcon/fourth.png';
import carouselIcon5 from '../../img/carouselIcon/fifth.png';

// -------subicon------
import subCarouselIcon1 from '../../img/carouselIcon/subCarouselIcon1.png';
import subCarouselIcon2 from '../../img/carouselIcon/subCarouselIcon2.png';
import subCarouselIcon3 from '../../img/carouselIcon/subCarouselIcon3.png';
import subCarouselIcon4 from '../../img/carouselIcon/subCarouselIcon4.png';
import subCarouselIcon5 from '../../img/carouselIcon/subCarouselIcon5.png';

// ---------------components
import FeatCarouselCell from '../1atoms/FeatCarouselCell';
export default function FeatCarousel() {
  return (
    <>
      <div
        className="carousel"
        data-flickity='{ "freeScroll": true, "wrapAround": true,"prevNextButtons": false,"autoPlay": 1500 }'
      >
        <FeatCarouselCell
          cardNumber={'firstCard'}
          carouselIcon={carouselIcon1}
          subCarouselIcon={subCarouselIcon1}
          upperContent={'Access From Your'}
          lowerContent={'Home'}
        />
        <FeatCarouselCell
          cardNumber={'secondCard'}
          carouselIcon={carouselIcon2}
          subCarouselIcon={subCarouselIcon2}
          upperContent={'High Quality Services'}
          lowerContent={'With Low Price'}
        />
        <FeatCarouselCell
          cardNumber={'thirdCard'}
          carouselIcon={carouselIcon3}
          subCarouselIcon={subCarouselIcon3}
          upperContent={'Instant Customer Care'}
          lowerContent={'Support On Demand'}
        />
        <FeatCarouselCell
          cardNumber={'fourthCard'}
          carouselIcon={carouselIcon4}
          subCarouselIcon={subCarouselIcon4}
          upperContent={'Secure & Trust Worthy'}
          lowerContent={''}
        />
        <FeatCarouselCell
          cardNumber={'fifthCard'}
          carouselIcon={carouselIcon5}
          subCarouselIcon={subCarouselIcon5}
          upperContent={'Secure & Trust Worthy'}
          lowerContent={'50+ Services To Solve Your Problems'}
        />
      </div>
    </>
  );
}
