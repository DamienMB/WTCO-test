/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Nav from 'src/components/Compagny/Drivers/Nav';
import EditDriverForm from 'src/components/Compagny/Drivers/EditDriverForm';
import Profile from './Profile';

// Styles et assets
import './driver.sass';

/**
 * Code
 */
const Driver = ({ driver }) => (
  <div className="driver">
    <Switch>
      <Route
        exact
        path="/drivers/:id"
        render={() => (
          <React.Fragment>
            <Nav />
            <Profile {...driver} />
          </React.Fragment>
        )}
      />
      <Route
        path="/drivers/:id/edit"
        render={() => (<EditDriverForm driver={driver} />)}
      />
      <Route
        path="/drivers/:id/remove"
        render={() => (<div>Suppression de {driver.last_name} {driver.first_name}</div>)}
      />
    </Switch>
  </div>
);

Driver.propTypes = {
  driver: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default withRouter(Driver);
