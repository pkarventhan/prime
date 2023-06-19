// node_modules imports
import React from 'react';
import { Helmet } from 'react-helmet-async';

// custom imports
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hoc Demo</title>
      </Helmet>
      <h2>Hoc Demo</h2>

      <StyledHello name="Karventhan" />
      <StyledBye name="Karventhan" />
    </div>
  );
};

export default HocDemoPage;
