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

    var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.petfinder.com/shelter.find?key=47dc816692c1648821b64b0e49169781&location=98122&output=full&format=json",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "4d0eae8b-874d-07f3-1674-35d75d05351c"
  }
}
    $.ajax(settings).done(function (response) {
  console.log(response);
});

    // Public API here
     return $resource('http://api.petfinder.com/shelter.find?key=47dc816692c1648821b64b0e49169781&location=98122&output=full&format=json', {}, {
      query: {
        method:'GET',
        isArray:false
      }
    });
  });

