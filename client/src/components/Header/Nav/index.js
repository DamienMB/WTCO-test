/**
 * Import
 */
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './nav.sass';

/**
 * Code
 */
const Nav = () => (
  <nav id="nav" className="navbar navbar-expand-md">
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
      MENU
    </button>
    <ul id="navbarNav" className="collapse navbar-collapse navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Activité</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Véhicules</a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/drivers">Chauffeurs</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Messages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Carte</a>
      </li>
    </ul>
  </nav>
);

/**
 * Export
 */
export default withRouter(Nav);
