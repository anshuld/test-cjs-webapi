'use strict';

/* Controllers */

var controllersModule = angular.module('cjsWebApiControllers', []);

controllersModule.controller('WideSearchController', ['$scope', 'WideSearch', '$log', function($scope, $log, WideSearch) {
  $scope.searchCriteria = {
      'adults': '2'
  };
  // Fixme - My hack
  // angular.element('#wSearchButton').focus();

  $scope.wideSearch = function($log) {
    // ['$scope', 'WideSearch', '$log', function($scope, $log, WideSearch){
    console.log('Logging search criteria - ' + JSON.stringify($scope.searchCriteria));

  }
  // ];
}]);


