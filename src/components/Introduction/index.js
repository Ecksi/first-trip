import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <div>
      <h1 className='header'>How and why weed is legal</h1>
      <span className='landing-content'>Colorado Amendment 64 was a successful popular initiative ballot measure to amend the Constitution of the State of Colorado, outlining a statewide drug policy for cannabis. The measure passed on November 6, 2012, and along with a similar measure in Washington state, marked an electoral first not only for America but for the world.</span>
      <br /><br />
      <span>The commercial sale of marijuana to the general public began on January 1, 2014, at establishments licensed under the regulatory framework</span>
      <br /><br />
      <p>For More information visit these resources</p>
      <br />
      <ul>
        <a href="https://en.wikipedia.org/wiki/Colorado_Amendment_64">
          <li>Wikipedia on Amendment 64</li></a>
        <a href="https://www.coloradopotguide.com/marijuana-laws-in-colorado/">
          <li>Colorado Pot Guide</li></a>
      </ul>
    </div>
  );
};

export default Introduction;