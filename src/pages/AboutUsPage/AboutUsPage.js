// rafce
// node_modules imports
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

// custom imports
import MockFragment from './MockFragment/MockFragment';

const AboutUsPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>Let us explore a bit more React</h1>
      <p>About Fragment-like JSX-less component</p>

      <MockFragment>
        <p>Hey</p>
        <p>How are you?</p>
      </MockFragment>

      {/* Demo'ing runtime error thru error boundary */}
      <p>Hi</p>
    </div>
  );
};

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage;
