/* Define AngularJS application and its dependicies */
var app = angular.module("app", []);
app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});
