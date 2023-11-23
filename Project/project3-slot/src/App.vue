<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <Button name="User Profile"></Button>
  <Button name="User Data"></Button>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'
export default {

  name: 'App',
  components: {
    HelloWorld,
    Button
  }
}
</script>

<style>
#app {
  
  
  text-align: center;
  
}
</style>
