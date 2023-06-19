import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ url, name }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" aria-current="page" to={url}>
        {name}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
};
export default MenuItem;
