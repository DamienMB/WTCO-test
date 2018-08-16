/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Driver from 'src/components/Compagny/Drivers/Driver';
import AddDriverForm from 'src/containers/Compagny/Drivers/AddDriverForm';

// Styles et assets
import './drivers.sass';

/**
 * Code
 */
const Drivers = ({ mobile, drivers }) => {
  const getDriverById = id => drivers.find(driver => driver.id === id);
  return (
    <div id="drivers">
      <h2>Gestion des chauffeurs</h2>
      <h3>Liste des chauffeurs:</h3>

      {/* Version mobile */}
      {mobile && (
        <div>
          {/* Affichage de tous les chauffeurs dans un accordeon avec bootstrap */}
          <ul className="drivers-list accordion" id="accordion">
            {drivers.map(driver => (
              <li key={driver.id}>
                <NavLink to={`/drivers/${driver.id}`}>
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse${driver.id}`}
                    className="btn"
                  >
                    {driver.last_name} {driver.first_name}
                  </button>
                </NavLink>
                {/* Affiche un chauffeur */}
                <div id={`collapse${driver.id}`} className="collapse" data-parent="#accordion">
                  <Driver driver={driver} />
                </div>
              </li>
            ))}
            {/* Bouton d'ajout de chauffeur */}
            <NavLink to="/drivers/add">
              <button
                className="add-driver-button"
                type="button"
                data-toggle="collapse"
                data-target="#driversAdd"
              >
                +
              </button>
            </NavLink>
            {/* Formulaire d'ajout */}
            <div id="driversAdd" className="collapse" data-parent="#accordion">
              <AddDriverForm />
            </div>
          </ul>
        </div>
      )}

      {/* Verion desktop */}
      {!mobile && (
        <div className="d-flex">
          <ul className="drivers-list">
            {/* Liste de tous les chauffeurs */}
            {drivers.map(driver => (
              <li key={driver.id}>
                <NavLink
                  to={`/drivers/${driver.id}`}
                  className=""
                >
                  {driver.last_name} {driver.first_name}
                </NavLink>
              </li>
            ))}
            <Link className="add-driver-button" to="/drivers/add">AJOUT</Link>
          </ul>

          {/* Affiche les composants selon les routes */}
          <Switch>
            {/* Route pour afficher le formulaire d'ajout de chauffeur */}
            <Route
              path="/drivers/add"
              component={AddDriverForm}
            />
            {/* Route pour afficher les details d'un chauffeur */}
            <Route
              path="/drivers/:id"
              render={({ match }) => {
                const { id } = match.params;
                const driver = getDriverById(id);
                return (
                  <div>
                    <Driver driver={driver} />
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      )}
    </div>
  );
};

Drivers.propTypes = {
  mobile: PropTypes.bool.isRequired,
  drivers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Drivers;
