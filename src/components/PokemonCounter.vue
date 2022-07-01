<template class="fade-in">
    <ul>
        <li>Juegos: {{partidas}}</li>
        <li class="rightAns">Aciertos: {{parWon}}</li>
        <li class="wrongAns">Fallos: {{parLost}}</li>
    </ul>
    <hr>
</template>

<script>
export default {
  props: {
    partidas: {
      type: Number,
      required: false
    },
    parWon: {
      type: Number,
      required: true
    },
    parLost: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
    display: flex;
    justify-content: center;
    margin-right: 2.6rem;
}
li {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    list-style: none;
    font-size: 0.85rem;
}
hr {
  height: 1px;
  background-color: #2c3e50;
}
</style>