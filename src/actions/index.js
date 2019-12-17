export function recentEngagements() {
  return {
    type: 'RECENT_ENGAGEMENT_REQUESTED'
  };
}
export function fetchEngagement(id) {
  return {
    type: 'FETCH_ENGAGEMENT_REQUESTED',
    id
  };
}
export function AddEngagementLigne(
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate
) {
  return {
    type: 'ADD_ENGAGEMENT_REQUESTED',
    receptionNumber,
    reception,
    tanzil,
    prix,
    institution,
    accountType,
    title,
    owner,
    visaNumber,
    visaDate
  };
}
export function updateEngagement(
  id,
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate
) {
  return {
    type: 'UPDATE_ENGAGEMENT_REQUESTED',
    payload: {
      id,
      receptionNumber,
      reception,
      tanzil,
      prix,
      institution,
      accountType,
      title,
      owner,
      visaNumber,
      visaDate
    }
  };
}
export function removeEngagement(id) {
  return {
    type: 'REMOVE_ENGAGEMENT_REQUESTED',
    id
  };
}
export function totalEngagement() {
  return {
    type: 'TOTAL_ENGAGEMENT_REQUESTED'
  };
}
export function monthlyEngagementNidara(filter, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_NIDARA_REQUESTED',
    filter,
    yearFilter
  };
}
export function monthlyEngagementDelegSafi(filter, accountTP, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_DELEGSAFI_REQUESTED',
    filter,
    accountTP,
    yearFilter
  };
}
export function monthlyEngagementDelgYousoufia(filter, accountTP, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_REQUESTED',
    filter,
    accountTP,
    yearFilter
  };
}
// export function filterChange(filterValue) {
//   return {
//     type: 'FILTER_VALUE_REQUESTED',
//     filterValue
//   };
// }
