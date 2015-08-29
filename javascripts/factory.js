app.factory("pokemon", ["$http", function($http) {
  var pokemon = {};
  pokemon.getAll = function () {
    return $http.get("http://pokeapi.co/api/v1/pokedex/1/");
  };

  pokemon.getSingle = function (id) {
    return $http.get("http://pokeapi.co/" + id);
  };

  pokemon.getSprite = function (sprite) {
    return $http.get("http://pokeapi.co/" + sprite);

  };
  return pokemon;
}]);
