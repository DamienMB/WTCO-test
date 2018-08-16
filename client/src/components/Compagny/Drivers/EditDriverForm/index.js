/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants

// Styles et assets
import './editdriverform.sass';

/**
 * Code
 */
const EditDriverForm = ({ driver }) => (
  <div id="driver-edit">
    <p>Edition de {driver.last_name} {driver.first_name}</p>
  </div>
);

EditDriverForm.propTypes = {
  driver: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default EditDriverForm;
