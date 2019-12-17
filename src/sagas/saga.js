import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  recentEngagements,
  addEngagement,
  fetchEngagement,
  updateEngagement,
  removeEngagement,
  totalEngagement,
  monthlyEngagementnidara,
  monthlyEngagementDelegSafi,
  monthlyEngagementDelegYousoufia
} from '../services/api';
import { browserHistory } from 'react-router';
function* recentEngagementsWorker(feathersApp) {
  const response = yield call(recentEngagements, feathersApp);
  console.log('engagement test ', response);
  yield put({
    type: 'RECENT_ENGAGEMENT_SUCCEDED',
    payload: response
  });
}
function* addEngagementWorker(feathersApp, action) {
  yield call(
    addEngagement,
    feathersApp,
    action.receptionNumber,
    action.reception,
    action.tanzil,
    action.prix,
    action.institution,
    action.accountType,
    action.title,
    action.owner,
    action.visaNumber,
    action.visaDate
  );
  yield browserHistory.push('');
}

function* fetchEngementWorker(app, action) {
  const response = yield call(fetchEngagement, app, action.id);
  yield put({
    type: 'FETCH_ENGAGEMENT_SUCCEDED',
    response
  });
}
function* updateEngementWorker(app, action) {
  const response = yield call(updateEngagement, app, action.payload);
  browserHistory.push('/');
}
function* removeEngagementWorker(app, action) {
  yield call(removeEngagement, app, action.id);
  browserHistory.push('/');
}
function* totalEngagementtWorker(app) {
  const response = yield call(totalEngagement, app);
  yield put({
    type: 'TOTAL_ENGAGEMENT_SUCCEDED',
    response
  });
}
export function* monthlyEngagementNidaraWorker(app, action) {
  const response = yield call(
    monthlyEngagementnidara,
    app,
    action.filter,
    action.yearFilter
  );
  yield put({
    type: 'MONTHLY_ENGAGEMENT_NIDARA_SUCCEDED',
    response
  });
}
export function* monthlyEngagemenDelegSafiWorker(app, action) {
  const result = yield call(
    monthlyEngagementDelegSafi,
    app,
    action.filter,
    action.accountTP,
    action.yearFilter
  );
  console.log('result', result);
  const response = result === undefined ? 0 : result;
  yield put({
    type: 'MONTHLY_ENGAGEMENT_DELEGSAFI_SUCCEDED',
    response
  });
}
export function* monthlyEngagemenDelegYousofiaWorker(app, action) {
  const response = yield call(
    monthlyEngagementDelegYousoufia,
    app,
    action.filter,
    action.accountTP,
    action.yearFilter
  );
  yield put({
    type: 'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_SUCCEDED',
    response
  });
}

export default function* root(feathersApp) {
  yield all([
    takeEvery(
      'RECENT_ENGAGEMENT_REQUESTED',
      recentEngagementsWorker,
      feathersApp
    ),
    takeEvery('ADD_ENGAGEMENT_REQUESTED', addEngagementWorker, feathersApp),
    takeEvery('FETCH_ENGAGEMENT_REQUESTED', fetchEngementWorker, feathersApp),
    takeEvery('UPDATE_ENGAGEMENT_REQUESTED', updateEngementWorker, feathersApp),
    takeEvery(
      'REMOVE_ENGAGEMENT_REQUESTED',
      removeEngagementWorker,
      feathersApp
    ),
    takeEvery(
      'TOTAL_ENGAGEMENT_REQUESTED',
      totalEngagementtWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_NIDARA_REQUESTED',
      monthlyEngagementNidaraWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_DELEGSAFI_REQUESTED',
      monthlyEngagemenDelegSafiWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_REQUESTED',
      monthlyEngagemenDelegYousofiaWorker,
      feathersApp
    )
  ]);
}
