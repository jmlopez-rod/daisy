'use strict';

/**
 * @ngdoc function
 * @name daisyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the daisyApp
 */
angular.module('daisyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
