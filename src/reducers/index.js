import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import engagementReducer from './engagementReducer';
import fetchEngagementRed from './fetchEngagementRed';
import statitcsReducer from './staticsTotalEngagement';
import monthlyEngNid from './monthlyEngagementNidara';
import monthlyDelegSafi from './monthlyEngementDelegSafiRed';
import monthlyDelegYousofia from './monthlyEngagementDelegYouRed';
// import FilterReducer from './filterReducer';
import { reducer as ReducerForm } from 'redux-form';
const root = combineReducers({
  engagements: engagementReducer,
  routing: routerReducer,
  engagement: fetchEngagementRed,
  statics: statitcsReducer,
  monthlyEngNid,
  monthlyDelegSafi,
  monthlyDelegYousofia,
  form: ReducerForm,
  // filterValue: FilterReducer
});
export default root;
