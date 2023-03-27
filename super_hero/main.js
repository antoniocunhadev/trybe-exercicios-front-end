fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
const namePokemon = document.createElement('h2')
  namePokemon.innerHTML = data.name
  document.body.appendChild(namePokemon)
  const imgPokemon = document.createElement('img')
  imgPokemon.src = data.sprites.front_default
  document.body.appendChild(imgPokemon)