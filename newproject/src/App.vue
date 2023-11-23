<template>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <frontend />
    </div>
  </div>
</div>

</template>

<script>
import frontend from './components/frontend.vue'

export default {
    name: 'App',
    components: {
        frontend
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
