'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp */
 
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, current) {
    console.log($scope.current = current.query({location: "98102"}));
  $scope.searchZip=function() {
    $scope.current = current.query({location: $scope.location});
  };
  });


  
/** 
angular.module('workspaceApp')
  .controller('MainCtrl', ['$scope', '$log', 'NgMap', function ($scope, $log, NgMap) {
    
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj37hATwUh9_59VaD-Bmlea66V_FDGr2w";
    
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    }); 
    

  }]); */
