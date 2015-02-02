'use strict';

/**
 * @ngdoc function
 * @name daisyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the daisyApp
 */
angular.module('daisyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
