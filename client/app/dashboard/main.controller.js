/* globals angular*/
/*jshint -W024 */
(function() {
  'use strict';

  angular.module('projectTimesheetApp')
    .controller('MainController', [
      '$scope', 'Auth',
      function ($scope, Auth) {
        var ctrl = this;

        ctrl.isLoggedIn =  Auth.isLoggedIn();
        ctrl.viewString = (ctrl.isLoggedIn) ? 'dashboard' : 'landing';
      }
    ])
    .controller('DashboardController', [
      '$scope', 'socket',
      function ($scope, socket) {
        //var ctrl = this;

        $scope.$on('$destroy', function() {
          socket.unsyncUpdates('thing');
        });
      }
    ]);

})();
