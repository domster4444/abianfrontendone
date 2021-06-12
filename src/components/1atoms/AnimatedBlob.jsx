import React from 'react';
import { useEffect } from 'react';
export default function AnimatedBlob() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // blob animation
    // Get the blob
    const blob = document.getElementById('blob');

    // Generate random numbers with a min/max range
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Transform the blob
    const transformBlob = () => {
      // Max an min limits arbitrarily defined for this test, play with the numbers and with other transform options!
      let scaleX = randomNumber(25, 150);
      let scaleY = randomNumber(25, 150);
      let rotate = randomNumber(-180, 180);

      // Ad the styles to the blob
      blob.style.transform =
        'scale3d(' +
        scaleX / 100 +
        ',' +
        scaleY / 100 +
        ',1) rotate(' +
        rotate +
        'deg)';
    };

    // Execute on load and then, every 6 seconds

    transformBlob();
    setInterval(function () {
      transformBlob();
    }, 1000);

    // blob animation
  });
  return (
    <>
      <div id="doubtSection_blob">
        <svg id="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor="rgb(112,128,250)" />
            <stop offset="95%" stopColor="#B7F0D3" />
          </linearGradient>
          <path
            d="M40.4,-59.3C53.3,-54.5,65.4,-45,73.7,-32.1C82.1,-19.2,86.8,-3,85.3,12.7C83.7,28.5,76.1,43.9,64.9,55.7C53.8,67.5,39.2,75.8,24.6,76.8C10,77.8,-4.6,71.6,-15.8,63.7C-27,55.8,-34.7,46.3,-43.5,37.1C-52.3,28,-62,19.1,-63.9,8.9C-65.8,-1.3,-59.8,-12.9,-54.8,-25.5C-49.7,-38,-45.7,-51.4,-36.8,-58C-27.8,-64.7,-13.9,-64.4,-0.1,-64.3C13.7,-64.2,27.5,-64.1,40.4,-59.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </>
  );
}
