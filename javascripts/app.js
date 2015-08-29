var app = angular.module("pokemonApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "partials/show.html",
    controller: "ShowController"
  });

});

app.directive("vnRandomPokemon", function () {
  return {
    templateUrl: "partials/random-pokemon.html",
    scope: {
      randomPokemon: "="
    }
  }
});
