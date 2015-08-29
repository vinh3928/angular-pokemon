var app = angular.module("pokemonApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/show.html",
    controller: "ShowController"
  });

});
