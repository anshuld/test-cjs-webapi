'use strict';

/* Controllers */

var controllersModule = angular.module('cjsWebApiControllers', ['cjsWebApiServices']);

controllersModule.controller('WideSearchController', ['$scope', 'WideSearch', function($scope, WideSearch) {
  $scope.searchCriteria = {
    'adults': '2',
    'children': '0',
    'departureDate': '2015-02-02',
    'duration': '7'
  };
  // Fixme - My hack
  console.log(WideSearch)

  $scope.doWideSearch = function() {
    console.log('Logging search criteria - ' + JSON.stringify($scope.searchCriteria));
    WideSearch.get({}, function(data) {
      $scope.searchCriteriaResponse = data;
    });
  }
}]);


