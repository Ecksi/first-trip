import React from 'react';
import './CoLaws.css';

const CoLaws = () => {
  return (
    <div className='co-laws'>
      <h1 className='header'>Somethings to know</h1>
      <p>Who can buy? 
        <span>Anyone over 21</span></p>
      <p>Where can I consume?
        <span>You may consume on private property that allows Marijuana consumption. Marijuana may not be consumed openly or pubpcly in Colorado.</span></p>
      <p>What about edibles?
        <span>The laws for smoking Marijuana also apply to edibles</span></p>
      <p>How much can I purchase?
        <span>Up to one ounce of cannabis flower, 1oz Flower = 8g of Concentrate (Shatter, Wax, etc) 1oz Flower = 800mg of Edibles</span></p>
      <p>Is it okay to have Marijuana in my car? 
        <span>Yes, you can carry marijuana in your car, but it must be in a sealed container, and it cannot cross state boundaries. It is illegal to consume marijuana in your car.</span></p>
      <p>What is the difference between Medical and Retail Marijuana?
        <span>Only pcensed retail marijuana stores may sell retail marijuana, and only to those 21 and older. Medical marijuana requires a state red card, which can only be obtained by Colorado residents with a recommendation from a doctor.</span></p>
      <p>How much does it cost?
        <span>Typically it will cost you around 120 for an ounce.</span></p>
      <br />
      <p>For More information visit these resources</p>
      <br />
      <ul>
        <a href="https://www.colorado.gov/pacific/marijuanainfodenver/residents-visitors">
          <li>Colorado.gov</li></a>
        <a href="https://www.coloradopotguide.com/marijuana-laws-in-colorado/">
          <li>Colorado Pot Guide</li></a>
      </ul>
    </div>
  );
};

export default CoLaws;