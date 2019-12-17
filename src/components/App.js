import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionsRoot from '../actions/index';
import Main from './Main';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsRoot, dispatch);
}
function mapStateToProps(state) {
  return {
    engagements: state.engagements,
    engagement: state.engagement,
    statics: state.statics,
    monthlyEngNid: state.monthlyEngNid,
    monthlyEngDelegSafi: state.monthlyDelegSafi,
    monthlyDelegYousofia: state.monthlyDelegYousofia,
    filterValue: state.filterValue
  };
}
const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
