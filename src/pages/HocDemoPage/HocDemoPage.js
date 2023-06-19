// node_modules imports
import React from 'react';
import Title from './../../components/Title/Title';

// custom imports
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <Title title="Hoc Demo" />
      <h2>Hoc Demo</h2>

      <StyledHello name="Karventhan" />
      <StyledBye name="Karventhan" />
    </div>
  );
};

export default HocDemoPage;
