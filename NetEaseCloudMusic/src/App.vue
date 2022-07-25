<template>
      <router-link to="/index"> <div class="experience">立即体验</div></router-link>
   <router-view></router-view>

 
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login,
  }
}
</script>

<style>
.experience{

    width: 1.6rem;
    font-size: 0.25rem;
    color: #e8868b;
    position: absolute;
    right: 5px;
    top: 15px;
    letter-spacing: 2px;
}
</style>
