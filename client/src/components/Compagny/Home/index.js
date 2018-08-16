/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import MissionsSummary from 'src/components/Compagny/Home/MissionsSummary';
import VehiclesSummary from 'src/components/Compagny/Home/VehiclesSummary';
import DriversSummary from 'src/components/Compagny/Home/DriversSummary';

// Styles et assets
import './home.sass';

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <button type="button">Profile de l'entreprise</button>
    <h2>Bienvenue chez WTCO</h2>
    <h3>Résumé de votre activité récente</h3>
    <h4>Missions :</h4>
    <MissionsSummary />
    <h4>Véhicules :</h4>
    <VehiclesSummary />
    <h4>Chauffeurs :</h4>
    <DriversSummary />
  </div>
);

/**
 * Export
 */
export default Home;
