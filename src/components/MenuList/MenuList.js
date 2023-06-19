// Functional Component with Arrow Function

import React from 'react';
import MenuItem from './MenuItem/MenuItem';
// fn defn
// must return jsx
// export

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Home',
      url: '/'
    },
    {
      id: 2,
      name: 'Hoc Demo',
      url: '/hoc-demo'
    },
    {
      id: 3,
      name: 'About Us',
      url: '/about-us'
    },
    {
      id: 4,
      name: 'Contact Us',
      url: '/contact-us'
    }
  ];
  return <MenuItem menuItems={menuItems} />;
};

export default MenuList;
