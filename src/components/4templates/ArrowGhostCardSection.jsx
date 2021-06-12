import React from 'react';
import rightArrow from '../../img/generalImage/righ-arrow.png';
import ArrowGhostCard from '../1atoms/ArrowGhostCard';
export default function ArrowGhostCardSection() {
  return (
    <>
      <section>
        <section className="whychooseus_section">
          <ArrowGhostCard
            color={'gold'}
            header={'Digital Analytics'}
            content={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.`}
            rightArrowImg={rightArrow}
          />
          <ArrowGhostCard
            color={'green'}
            header={'Digital Analytics'}
            content={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.`}
            rightArrowImg={rightArrow}
          />
          <ArrowGhostCard
            color={'blue'}
            header={'Digital Analytics'}
            content={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste explicabo error excepturi placeat facilis est totam vel
              tempore blanditiis, ipsum, assumenda distinctio expedita? Fuga.`}
            rightArrowImg={rightArrow}
          />
        </section>
      </section>
    </>
  );
}
