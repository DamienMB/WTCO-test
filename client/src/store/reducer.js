import uuidv4 from 'uuid/v4';

import drivers from 'src/datas/drivers';

/**
 * Initial State
 */
const initialState = {
  drivers,
  addDriverForm: {
    lastName: '',
    firstName: '',
    mail: '',
    birthdate: '',
    sexe: '',
    nationality: '',
    adress: '',
    nss: '',
    licence: '',
    licenceValidity: '',
    fcosValidity: '',
  },
};

/**
 * Types
 */
const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';
const ADD_DRIVER = 'ADD_DRIVER';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FORM:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.field]: action.value,
        },
      };

    case ADD_DRIVER: {
      const newDriver = {
        id: uuidv4(),
        compagny_id: 1,
        last_name: state.addDriverForm.lastName,
        first_name: state.addDriverForm.firstName,
        mail: state.addDriverForm.mail,
        birthdate: state.addDriverForm.birthdate,
        sexe: state.addDriverForm.sexe,
        nationality: state.addDriverForm.nationality,
        adress: state.addDriverForm.adress,
        nss: state.addDriverForm.nss,
        licence: state.addDriverForm.licence,
        licence_validity: state.addDriverForm.licenceValidity,
        fcos: state.addDriverForm.fcosValidity,
      };

      return {
        ...state,
        drivers: [...state.drivers, newDriver],
        addDriverForm: {
          lastName: '',
          firstName: '',
          mail: '',
          birthdate: '',
          sexe: '',
          adress: '',
          nss: '',
          licence: '',
          licenceValidity: '',
          fcosValidity: '',
        },
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeInputForm = (form, field, value) => ({
  type: CHANGE_INPUT_FORM,
  form,
  field,
  value,
});

export const addDriver = () => ({
  type: ADD_DRIVER,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
