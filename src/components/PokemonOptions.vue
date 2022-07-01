<template>
  <div class="options-container">
      <button v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selection', pokemon.id)" :disabled="block">
        {{pokemon.name}}
      </button>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    },
    block: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>

/* Pokemon Options */
.options-container {
    margin: 20px 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}
button {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    align-self: center;
    text-transform: capitalize;
}

button:hover {
    background-color: rgba(0, 0, 0, 0.05);
}


</style>