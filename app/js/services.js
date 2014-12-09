'use strict';

/* Services */

var cjsWebApiServices = angular.module('cjsWebApiServices', ['ngResource']);

cjsWebApiServices.factory('WideSearch', ['$resource', function($resource){
	return $resource('phones/:phoneId.json', {}, {
		query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	});
}]);