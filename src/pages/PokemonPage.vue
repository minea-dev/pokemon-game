<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <PokemonCounter :partidas="partidas" :parWon="parWon" :parLost="parLost" v-if="partidas > 0"/>
        <h1>¿Quién es este Pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" :block="blocked" />

        <template v-if="showAnswer" class="fade-in">
            <h2 :class="{ rightAns : result, wrongAns : !result}">{{ message }}</h2>
            <button @click="newGame">
                Probar de nuevo
            </button>
        </template>
    </div>
</template>

<script>
// Components
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import PokemonCounter from '@/components/PokemonCounter'

// Helpers
import getPokemonOptions from '@/helpers/getPokemonOptions'



export default {
    components: { PokemonPicture, PokemonOptions, PokemonCounter },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
            result: null,
            blocked: false,
            partidas: 0,
            parWon: 0,
            parLost: 0
        }
    }, 
    methods: {
        // Devuelve pokemon elejido 
        async mixPokemonArray() {
            // Función async con el array de 4 pokemons random, con nombre/id
            this.pokemonArr = await getPokemonOptions()
            // Número random de 4
            const rndInt = Math.floor(Math.random() * 4)
            // Sacamos 1 de los 4 de forma aleatoría
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        // Ganar o perder
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true
            this.blocked = true
            this.partidas = this.partidas += 1
            if (this.pokemon.id === selectedId) {
                this.result = true
                this.parWon = this.parWon += 1
                return this.message = `Yujuu, has acertado 🥳`
            }
            this.result = false
            this.parLost = this.parLost += 1
            return this.message = `Oops, era ${this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)} 🥴`
        },
        // Reiniciamos el juego
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr= []
            this.pokemon = null
            this.blocked = false
            this.mixPokemonArray()
        }
    }, 
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style scoped>
button {
    background-color: #2c3e50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>