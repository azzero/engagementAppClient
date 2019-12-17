//all engagement
export function recentEngagements(app, skiip) {
  const engagement = app.service('engagement');
  const resulat = engagement
    .find({
      query: {
        $sort: { visaNumber: 1 }
      }
    })
    .then(data => data.data);
  return resulat;
}

//add engagement
export function addEngagement(
  app,
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
  const engagement = app.service('engagement');
  const res = engagement
    .create({
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
    })
    .then(data => data.data);
  return res;
}
//fetch engagement
export function fetchEngagement(app, engagementId) {
  const engagement = app.service('engagement');
  const ligne = engagement
    .find({
      query: { id: engagementId }
    })
    .then(data => data.data);
  return ligne;
}
//update
export function updateEngagement(app, payload) {
  const engagement = app.service('engagement');
  const resulat = engagement
    .update(payload.id, {
      receptionNumber: payload.receptionNumber,
      reception: payload.reception,
      tanzil: payload.tanzil,
      prix: payload.prix,
      institution: payload.institution,
      accountType: payload.accountType,
      title: payload.title,
      owner: payload.owner,
      visaNumber: payload.visaNumber,
      visaDate: payload.visaDate
    })
    .then(data => data.data);
  return resulat;
}
//remove
export function removeEngagement(app, id) {
  const engagement = app.service('engagement');
  const resultat = engagement.remove(id).then(data => data.data);
  return resultat;
}

export function totalEngagement(app) {
  const engagement = app.service('engagement');
  const resulat = engagement
    .find({
      query: {
        $somme: 'true'
      }
    })
    .then(data => data.data);
  return resulat;
}
export function monthlyEngagementnidara(app, filter, yearFilter) {
  const engagement = app.service('engagement');
  const monthFilterNidara = filter;
  const resulat = engagement
    .find({
      query: {
        $monthlyNidara: 'true',
        institution: 'نظارة اسفي',
        monthFilterNidara: parseInt(monthFilterNidara),
        year: yearFilter
      }
    })
    .then(data => data.data);
  return resulat;
}
export function monthlyEngagementDelegSafi(app, filter, accountTp, yearFilter) {
  const monthFilter = filter;
  const engagement = app.service('engagement');
  const result = engagement
    .find({
      query: {
        $monthlySafi: 'true',
        institution: 'مندوبية اسفي',
        monthFilter: parseInt(monthFilter),
        accountType: accountTp,
        year: yearFilter
      }
    })
    .then(data => data.data);
  return result;
}
export function monthlyEngagementDelegYousoufia(
  app,
  filter,
  accountTp,
  yearFilter
) {
  const monthFilter = filter;
  const engagement = app.service('engagement');
  const result = engagement
    .find({
      query: {
        $monthlyYousofia: 'true',
        institution: 'مندوبية اليوسفية',
        monthFilter: parseInt(monthFilter),
        accountType: accountTp,
        year: yearFilter
      }
    })
    .then(data => data.data);
  return result;
}
