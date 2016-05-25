'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('SearchCtrl', function ($scope, $routeParams, $rootScope, current, search) {
     $scope.location = $routeParams.location; 
 //   console.log($scope.current = current.query({location: "98102"}));
    $rootScope.viewMore;
    $scope.orderProp = 'location';
  });

  