/**
 * Module definition file.
 */

var angular = require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('reveal.js')

var app = angular.module('lunch-presentation', [
  'ngRoute',
  'ui.bootstrap'
]);

// require('./components');
// require('./filters');

// require('./services');
// require('./controllers');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl as home'
      // templateUrl: 'app/views/home.html'
    })
    .otherwise({ redirectTo: '/' });
});
