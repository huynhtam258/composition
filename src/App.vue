<template>
  <div id="app">
    <CompositionContainer></CompositionContainer>
  </div>
</template>

<script>
import CompositionContainer from './components/CompositionContainer.vue'
export default {
  name: 'App',
  components: {
    CompositionContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
