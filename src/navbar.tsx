import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/podcast">
            Podcast
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/movies">
            Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
