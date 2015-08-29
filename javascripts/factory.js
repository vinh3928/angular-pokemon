app.factory("pokemon", ["$http", function($http) {
  var pokemon = {}
  pokemon.getAll = function () {
    return $http.get("http://pokeapi.co/api/v1/pokedex/1/")
  }
  return pokemon

}]);
