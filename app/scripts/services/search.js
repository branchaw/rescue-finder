'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.search
 * @description
 * # search
 * Factory in the workspaceApp.
 */
angular.module('workspaceApp')
  .factory('search', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource(
      'http://api.petfinder.com/shelter.find?key=47dc816692c1648821b64b0e49169781&location=:location&output=full&format=json',
      {
        callback: "JSON_CALLBACK"
      },
      {
      query: {
        method:'JSONP',
        params:{
          location: '98122'
        },
        isArray:true
      }
    });
  }); 

