starter.controller('NotificationsCtrl', function($scope, NotificationsService) {
  $scope.notifications = NotificationsService.getNotifications(0);
});