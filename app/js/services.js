'use strict';

/* Services */

var cjsWebApiServices = angular.module('cjsWebApiServices', ['ngResource']);

cjsWebApiServices.factory('WideSearch', ['$resource', function($resource){
	//return $resource('http://www.mocky.io/v2/548c53ae4ca90a310903477c');
	return $resource('http://www.mocky.io/v2/548dd718584af25a1016ee2d');
}]);