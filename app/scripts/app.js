'use strict';

/**
 * @ngdoc overview
 * @name daisyApp
 * @description
 * # daisyApp
 *
 * Main module of the application.
 */
angular
  .module('daisyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
