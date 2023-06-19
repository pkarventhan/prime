import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Title = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
