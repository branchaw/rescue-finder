'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
//     'uiGmapgoogle-maps'
  ])
//   .config(
//     ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
//         GoogleMapApiProviders.configure({
//             key: 'AIzaSyCj37hATwUh9_59VaD-Bmlea66V_FDGr2w',
//             china: true
//         });
//     }]
//   )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
