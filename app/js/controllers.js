'use strict';

/* Controllers */

var controllersModule = angular.module('cjsWebApiControllers', []);

controllersModule.controller('WideSearchController', ['$scope', 'WideSearch', function($scope, WideSearch) {
  $scope.phones = {};
  $scope.wideSearch = ['$scope', 'WideSearch', '$log', function($scope, $log, WideSearch){
    $log.log('Logging search criteria - ' + $scope.searchCriteria);
  }];
}]);


