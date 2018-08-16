/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './drivers.sass';

/**
 * Code
 */
const Nav = () => (
  <ul className="driver-buttons">
    <li>
      <a href="#">Profile</a>
    </li>
    <li>
      <a href="#">Véhicules</a>
    </li>
    <li>
      <a href="#">Missions</a>
    </li>
  </ul>
);

/**
 * Export
 */
export default Nav;
