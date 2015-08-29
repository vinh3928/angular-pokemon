app.controller("ShowController", ["$scope", "pokemon", function($scope, pokemon) {
  $scope.foo = "bar";
  $scope.pokemons = [];
  $scope.randomPokemon = [];
  pokemon.getAll().success(function (data) {
    $scope.pokemons = data.pokemon;
    for (var i = 0; i < 5; i ++) {
      var obj = {};
      var random = parseInt(Math.random()*data.pokemon.length);
      pokemon.getSingle(data.pokemon[random].resource_uri).success(function (datas) {
        obj = datas;
        $scope.randomPokemon.push(obj);
      }).then(function (data) {
          console.log($scope.randomPokemon);
          pokemon.getSprite($scope.randomPokemon[$scope.randomPokemon.length -1].sprites[0].resource_uri).success(function (datas) {
            $scope.randomPokemon[$scope.randomPokemon.length - 1].url = datas;
          });
      });
    }
  });
}]);
