<template>
  <h1>Общий рейтинг</h1>

  <Loading v-if="loading"/>
  <table v-else>
  <tr>
    <th>Пользователь</th>
    <th>Секунды</th>
    <th>Дата</th>
  </tr>
  <tr v-for="res in results"
    :key="res.id"
  >
    <td>{{res.name}}</td>
    <td>{{res.timer}}</td>
    <td>{{res.date}}</td>
  </tr>
 
</table>

</template>


<script setup>

import { ref } from 'vue'
import {getResults} from '../axios'
import Loading from '../ui/Loading.vue'
let results = ref(null)

const loading = ref(true)


getResults().then(res => {

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


