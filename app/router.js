import Ember from 'ember';
import config from './config/environment';

// router of your Ember app is responsible for
// loading data and displaying templates.
// It does so by matching the
// current URL to the routes that we define.

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('questions', function(){
    this.route('index');
    this.route('question');
    this.route('random');
  });

});

export default Router;
