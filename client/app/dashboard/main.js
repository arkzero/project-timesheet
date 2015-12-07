/* globals angular*/
(function () {
  'use strict';

  angular.module('projectTimesheetApp')
    .config(function($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          views: {
            '@': {
              templateUrl: 'app/dashboard/views/main.html',
              controller: 'MainController',
              controllerAs: 'main'
            },
            'landing@main': {
              templateUrl: 'app/dashboard/views/landing.html'
            },
            'dashboard@main': {
              templateUrl: 'app/dashboard/views/dashboard.html',
              controller: 'DashboardController',
              controllerAs: 'ctrl'
            }
          }
        });
    });
})();
