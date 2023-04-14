<template>
  <div class="container">
    
    <div v-if="user" >
      <Nav :exitUser="exitUser"/>
      <router-view/>
    </div>
    <div v-else class="auth__container">
      <Auth :setupUser="setupUser"/>
    </div>
   
 
  </div>
</template>



<style scoped>
  .container {
    
    width: 500px;
    margin: 0 auto;
  }

  .auth__container  {
    height: 100vh;
    position: relative;
    
  }


  @media (max-width: 550px) {
    .container {
      padding: 5px;
      width: 400px;
    }
  }


  @media (max-width: 400px) {
    .container {
      padding: 5px;
      width: 350px;
    }
  }

  
</style>

<script setup>

import Nav from './components/Nav.vue'
import Auth from './components/Auth.vue'
import { ref } from 'vue'

const user = ref(localStorage.getItem('user'))

const setupUser = (data) => {

  user.value = data
}

const exitUser = (data) => {
  user.value = null
  localStorage.removeItem('user')
}




</script>


