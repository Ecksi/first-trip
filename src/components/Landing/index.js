import React from 'react';
import Navigation from '../../containers/Navigation';
import Introduction from '../Introduction';
import CoLaws from '../CoLaws';
import GettingStarted from '../GettingStarted';
import './Landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header-background">
        <Navigation />
      </div>
      <div className="three-columns">
        <section>
          <Introduction />
        </section>
        <section>
          <CoLaws />
        </section>
        <section>
          <GettingStarted />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;