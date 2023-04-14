<template>
  <h1>Мои результаты</h1>

  <Loading v-if="loading"/>
  <table v-else>
  <tr>
    <th>Секунды</th>
    <th>Дата</th>
  </tr>
  <tr v-for="res in results"
    :key="res.id"
  >
    <td>{{res.timer}}</td>
    <td>{{res.date}}</td>
  </tr>
 
</table>

</template>


<script setup>

import { ref } from 'vue'
import {getResultsByUserId} from '../axios'
import Loading from '../ui/Loading.vue'
let results = ref(null)

const loading = ref(true)


getResultsByUserId(JSON.parse(localStorage.getItem('user')).id).then(res => {

  results.value = res.data
  
}).finally(() => {
    loading.value = null
})

</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>


