import pokemonApi from "@/api/pokemonApi"

// Creamos arr con nº de pokemons que vamos a utilizar (650)
const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))

    return pokemonsArr.map((_, index) => index + 1)
}

// Rellenamos el arr con los 650 números ordenados de forma aleatoria
// Cortamos el arr con las 4 primeras posiciones
// Como la función getPokemonNames es async, tenemos que usar async/await
// Devolvemos array objetos con 4 pokemons (nombre, id)
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

    const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4))

    return pokemons
}

// Desestructuramos en opciones y sacamos los nombres de cada posición
const getPokemonNames = async([a, b, c, d]) => {

    //Array de promesas
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    // Llamada en conjunto al array de promesas + desestructuración
    const [p1, p2, p3, p4] = await Promise.all(promiseArr)

    // Devolvemos un arr con el name e id de 4 pokemons random
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id }
    ]
}


// USAMOS FUNCIÓN getPokemonOptions

export default getPokemonOptions