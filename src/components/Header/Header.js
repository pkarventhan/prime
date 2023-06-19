// Functional Component with Named Function

// fn defn
// must return jsx
// export

import React from 'react';
import MenuList from '../MenuList/MenuList';

const Header = () => {
  return (
    <header className="navbar navbar-expand-md fixed-top bg-black navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Prime Video
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <MenuList />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
