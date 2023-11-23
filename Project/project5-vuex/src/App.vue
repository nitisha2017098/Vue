<template>
<counter />
<div>
    <h3>App Vue counter</h3>
    {{ $store.state.count }}
</div>
<div>
  <button @click.prevent="onIncrement()">Increment</button>
</div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
    name: 'App',
    computed: {
      count(){
        return this.$store.state.count;
      }
    },
    components: {
        Counter,
    },
    methods: {
      onIncrement(){
        return this.$store.commit('Increment', { value: 3})
      }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
