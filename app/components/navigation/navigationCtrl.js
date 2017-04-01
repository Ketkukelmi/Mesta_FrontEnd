app.controller('navigationCtrl', function ($scope, accountService) {
    var user;
    $scope.user = accountService.returnUser();
    console.log("navi" , user);
});
