'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the workspaceApp */
 
angular.module('workspaceApp')
  .controller('MainCtrl', function ($scope, $rootScope, current, search, $localStorage, $timeout, ngToast) {
    console.log($scope.current = current.query({location: "98102"}));
   $rootScope.viewMore = $scope.current;
  
  $scope.searchZip=function(location) {
      console.log(location);
      $scope.current = current.query({location: $scope.location});     
    $rootScope.viewMore = $scope.current;
  };
    $scope.orderProp = 'location';
    $scope.quantity = 5;  
     
   $scope.storage = $localStorage;
  
 $scope.saveZip = function(location){
   $scope.alertZip = location;
   var zipData = {
        'location': location    
    };
   console.log(zipData);
    if (!$localStorage.savedZips){
        $localStorage.savedZips = [zipData];
    } else {
        
        // Check to make sure we haven't already saved the current location.
      
        var save = true; // Initialize the save decision variable.
      
        // Use this loop to check if we've already saved the location.
        for (var i=0; i < $localStorage.savedZips.length; i++){
            if ($localStorage.savedZips[i].location === zipData.location) {

              // This is a duplicate, so don't save (variable set to false).
                save = false;
            }
        }
        if (save===true){
            $localStorage.savedZips.push(zipData);
         
          //success message
          ngToast.create('search successfully saved');
          //object to trigger success message
          $rootScope.zipSaved = {
            'success': true
            };
          
                  
        } else {
            console.log('seach already saved');
          
          //duplicate search warning message
          ngToast.create({
           className: 'warning',
            horizontalPosition: 'center',
           content: 'search already saved'
              });
          //object to trigger message
          $rootScope.zipSaved = {
            'duplicate': true
          };         
        }
      }
  
    }; 
     //function to call saved searches 
      $rootScope.reloadZip=function(location) {
          console.log(location);
          $scope.current = current.query({location: location}); 
        $rootScope.viewMore = $scope.current;
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
