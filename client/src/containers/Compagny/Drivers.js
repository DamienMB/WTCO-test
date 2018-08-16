/**
 * Npm import
 */
import { connect } from 'react-redux';
import withMobile from 'src/hoc/withMobile';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Drivers from 'src/components/Compagny/Drivers';

// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */

const mapStateToProps = state => ({
  drivers: state.drivers,
});

/* === Actions === */

const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const DriversContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drivers);

/**
 * Export
 */
export default withMobile(withRouter(DriversContainer), 768);
