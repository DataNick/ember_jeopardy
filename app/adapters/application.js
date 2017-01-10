import DS from 'ember-data';

// the adapter is responsible for connecting the JSON that
// is served to the Ember app by our Rails API to
// the Ember Data objects that will be
// presented to our viewer

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  host: 'http://www.trivialbuzz.com'
});
