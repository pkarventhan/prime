import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ menuItems }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      {menuItems.map((list) => (
        <li className="nav-item" key={list.id}>
          <NavLink className="nav-link" aria-current="page" to={list.url}>
            {list.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MenuItem.propTypes = {
  menuItems: PropTypes.array
};
export default MenuItem;
