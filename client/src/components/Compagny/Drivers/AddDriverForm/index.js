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
import './addform.sass';

/**
 * Code
 */
class AddForm extends React.Component {
  static propTypes = {
    lastNameValue: PropTypes.string,
    firstNameValue: PropTypes.string,
    mailValue: PropTypes.string,
    birthdateValue: PropTypes.string,
    sexeValue: PropTypes.string,
    nationalityValue: PropTypes.string,
    adressValue: PropTypes.string,
    nssValue: PropTypes.string,
    licenceValue: PropTypes.string,
    licenceValidityValue: PropTypes.string,
    fcosValidityValue: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onAddDriver: PropTypes.func.isRequired,
  }

  static defaultProps = {
    lastNameValue: '',
    firstNameValue: '',
    mailValue: '',
    birthdateValue: '',
    sexeValue: '',
    nationalityValue: '',
    adressValue: '',
    nssValue: '',
    licenceValue: '',
    licenceValidityValue: '',
    fcosValidityValue: '',
  }

  handleInputChange = (evt) => {
    const { id, value } = evt.target;
    const { onInputChange } = this.props;

    onInputChange(id, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { onAddDriver } = this.props;
    onAddDriver();
  }

  render() {
    const {
      lastNameValue,
      firstNameValue,
      mailValue,
      birthdateValue,
      sexeValue,
      nationalityValue,
      adressValue,
      nssValue,
      licenceValue,
      licenceValidityValue,
      fcosValidityValue,
    } = this.props;

    return (
      <div id="drivers-add">
        <h4>Ajout d'un chauffeur</h4>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-sm">Nom:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="lastName"
                placeholder="Nom"
                value={lastNameValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-4 col-form-label col-form-label-sm">Prénom:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control
                form-control-sm"
                id="firstName"
                placeholder="Prénom"
                value={firstNameValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="mail" className="col-sm-4 col-form-label col-form-label-sm">Mail:</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control form-control-sm"
                id="mail"
                placeholder="adresse mail"
                value={mailValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="birthdate" className="col-sm-4 col-form-label col-form-label-sm">Date de naissance:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="birthdate"
                placeholder="Date de naissance:"
                value={birthdateValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="sexe" className="col-sm-4 col-form-label col-form-label-sm">Sexe:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="sexe"
                placeholder="Sexe"
                value={sexeValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nationality" className="col-sm-4 col-form-label col-form-label-sm">Nationalité:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="nationality"
                placeholder="Nationalité"
                value={nationalityValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="adress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="adress"
                placeholder="Adresse"
                value={adressValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nss" className="col-sm-4 col-form-label col-form-label-sm">N° de Sécurité sociale:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="nss"
                placeholder="N° de Sécurité Sociale"
                value={nssValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="licence" className="col-sm-4 col-form-label col-form-label-sm">N° de permis de conduire:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="licence"
                placeholder="N° de permis de conduire"
                value={licenceValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="licenceValidity" className="col-sm-4 col-form-label col-form-label-sm">Validité du permis:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="licenceValidity"
                placeholder="Date de validité du permis"
                value={licenceValidityValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="fcosValidity" className="col-sm-4 col-form-label col-form-label-sm">Validité de la FCOS:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="fcosValidity"
                placeholder="Date de validité FCOS"
                value={fcosValidityValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="">
            <button className="validate-button" type="submit">Valider</button>
          </div>
        </form>

      </div>
    );
  }
}

/**
 * Export
 */
export default AddForm;
