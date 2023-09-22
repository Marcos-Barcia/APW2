const {BuscarPokemon} = require ("./pokemon")

console.log(BuscarPokemon(25).then((pokemon)=>{console.log(pokemon)}))