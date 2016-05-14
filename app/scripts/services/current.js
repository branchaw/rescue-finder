'use strict';

/**
 * @ngdoc service
 * @name workspaceApp.current
 * @description
 * # current
 * Factory in the workspaceApp.*
 
angular.module('workspaceApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=animal+rescues+shelters+in+Seattle&key=AIzaSyCj37hATwUh9_59VaD-Bmlea66V_FDGr2w', {}, {
      query: {
        method:'GET',
        params:{
          location: '47.6149942,-122.4759881',
          radius: '500',
          keyword: 'animal+shelter+rescue',
          bogus: null
        },
        isArray:false
      }
    });
  }); */