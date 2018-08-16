/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AddDriverForm from 'src/components/Compagny/Drivers/AddDriverForm';

// Action Creators
import { changeInputForm, addDriver } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  lastNameValue: state.addDriverForm.lastName,
  firstNameValue: state.addDriverForm.firstName,
  mailValue: state.addDriverForm.mail,
  birthdateValue: state.addDriverForm.birthdate,
  sexeValue: state.addDriverForm.sexe,
  nationalityValue: state.addDriverForm.nationality,
  adressValue: state.addDriverForm.adress,
  nssValue: state.addDriverForm.nss,
  licenceValue: state.addDriverForm.licence,
  licenceValidityValue: state.addDriverForm.licenceValidity,
  fcosValidityValue: state.addDriverForm.fcosValidity,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onInputChange: (field, value) => {
    dispatch(changeInputForm('addDriverForm', field, value));
  },
  onAddDriver: () => {
    dispatch(addDriver());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const AddDriverFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddDriverForm);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default AddDriverFormContainer;
