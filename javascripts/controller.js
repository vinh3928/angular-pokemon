app.controller("ShowController", ["$scope", "pokemon", function($scope, pokemon) {
  $scope.foo = "bar";
  $scope.pokemons = []
  $scope.display = [];
  pokemon.getAll().success(function (data) {
    $scope.pokemons = data.pokemon;
    for (var i = 0; i < 5; i ++) {
      var random = parseInt(Math.random()*data.pokemon.length);
      $scope.display.push

    }

  });
}]);
