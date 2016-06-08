var app = angular.module('angularSeedApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/about', {
        templateUrl: 'about/about-partial.html',
        controller: 'AboutController'
    })
    .when('/contact', {
        templateUrl: 'contact/contact-partial.html',
        controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/about'
      });
}]);