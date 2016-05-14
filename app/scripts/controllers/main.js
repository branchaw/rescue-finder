'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp
 
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();
  });
  */

angular.module('workspaceApp')
//   .controller('MainCtrl', ['$scope', '$log', 'uiGmapGoogleMapApi', function ($scope, $log, GoogleMapApi) {
  .controller('MainCtrl', ['$scope', '$log', 'NgMap', function ($scope, $log, NgMap) {
    
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj37hATwUh9_59VaD-Bmlea66V_FDGr2w";
    
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
    
//       $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    
//     angular.extend($scope, {
//         map: {center: 
//           {
//             latitude: 40.1451, 
//             longitude: -99.6680  
//           }, 
//           zoom: 4 
//         },
//         searchbox: { 
//           template:'searchbox.tpl.html', 
//           events:{
//             places_changed: function (searchBox) {}
//           }
//         },
//         options: {
//           scrollwheel: false
//         }
//       });
      
//       GoogleMapApi.then(function(maps) {
//         maps.visualRefresh = true;
//       });
  }]);
