<template>
  
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
        <profile></profile>
      </div>
    </div>
  </div>
</template>

<script>

import profile from './components/profile.vue';

export default {
  name: 'App',
  components: {
    
    profile
  }
}
</script>

