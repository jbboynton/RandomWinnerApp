/**
 * Module definition file.
 */

var angular = require('angular');
require('angular-route');
require('angular-ui-bootstrap');

var app = angular.module('randomWinnerApp', [
  'ngRoute',
  'ui.bootstrap'
]);

require('./controllers');

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'RandomizerCtrl as vm',
      templateUrl: 'app/views/randomizer.html'
    })
    .otherwise({ redirectTo: '/' });
});
