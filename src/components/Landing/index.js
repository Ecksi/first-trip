import React from 'react';
import Navigation from '../Navigation';
import './Landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-background">
        <Navigation />
      </div>
      <h1 className="landing-header">Landing Page</h1>
      <div className="three-columns">
        <div>
          <h3>How and why weed is legal</h3>
          On November 6, 2012 Amendent 64 passed allowing for the personal use and regulation of marijuana for adults 21 and over.
        </div>
        <div>
          <h3>Somethings to know</h3>
          <ul>
            <li>Who can buy? - Anyone over 21</li>
            <li>Where can I consume? - You may consume on private property that allows Marijuana consumption. Marijuana may not be consumed openly or publicly in Colorado.</li>
            <li>What about edibles? - The laws for smoking Marijuana also apply to edibles</li>
            <li>How much can I purchase? - Up to one ounce of cannabis flower, 1oz Flower = 8g of Concentrate (Shatter, Wax, etc) 1oz Flower = 800mg of Edibles</li>
            <li>Is it okay to have Marijuana in my car? - Yes, you can carry marijuana in your car, but it must be in a sealed container, and it cannot cross state boundaries. It is illegal to consume marijuana in your car.</li>
            <li>What is the difference between Medical and Retail Marijuana? - Only licensed retail marijuana stores may sell retail marijuana, and only to those 21 and older. Medical marijuana requires a state red card, which can only be obtained by Colorado residents with a recommendation from a doctor.</li>
            <li>How much does it cost? - Typically it will cost you around 120 for an ounce.</li>
          </ul>
        </div>
        <div>
          <h3>Getting Started</h3>
          How to use the website
        </div>
      </div>
    </div>
  );
};

export default LandingPage;