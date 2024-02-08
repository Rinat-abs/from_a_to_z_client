<template>



  <div class="game">

    <h1 class="game__title">От А до Я</h1>

    <p class="game__description">
      THIS IS TEST APP
      Нажимайте на буквы настолько быстро, насколько вы сможете! <br />
      Таймер будет запущен автоматически.
    </p>
    
    <button class="game__update" @click="resetTimer">обновить</button>

    <div class="game__timer">Таймер: <span>{{getZero(minutes)}}.{{getZero(seconds)}}</span> </div>
    
    <div class="geme__loading" v-if="loading">
        <Loading/>
    </div>
    <div class="game__grid" v-else>
      <div
        class="game__cell"
        v-for="(cell, index) in selected"
        :key="index"
        @click="wordClick"
        :id="index"
      >
        {{ cell }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from '../ui/Loading.vue'
import { ref } from "vue";
import {addResult} from '../axios'


let alphabet = ref([
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ь",
  "Ы",
  "Ъ",
  "Э",
  "Ю",
  "Я",
]);
let selected = ref([]);
let seconds = ref(0)
let minutes = ref(0)
let loading = ref(false)
let intervalId;
let firstStart = false;
let counter = 0
let currentId = 16
let timer = 0

const startTimer = () => {
    intervalId = setInterval(() => {
    seconds.value++
    timer++   
    if (seconds.value === 60) {
      seconds.value = 0
      minutes.value++
     
    }
  }, 1000);
}

const resetTimer = () => {
    firstStart = false 
    clearInterval(intervalId)
    seconds.value = 0
    minutes.value = 0
    counter = 0
    timer = 0
    currentId = 16
    selected.value = []
    prepareGame()
}

const getZero = (num) => {
    if(num < 10) return '0'+num
    return num
}

const prepareGame = () => {
    // выбираем первые 16 символов из алфавита
    for (let i = 0; i < currentId; i++) {
    selected.value.push(alphabet.value[i]);
    }

    // перемешиваем символы в массиве
    for (let i = selected.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // выбираем случайный индекс
    [selected.value[i], selected.value[j]] = [
        selected.value[j],
        selected.value[i],
    ]; // меняем местами символы по выбранным индексам
    }
}

prepareGame()

const wordClick = (e) => {
   
  if (e.target.innerText == alphabet.value[counter]) {
    if(!firstStart)
    {
        firstStart = true 
        startTimer()
    }
    counter += 1
    
    

    if(alphabet.value[currentId]) selected.value[e.target.getAttribute("id")] = alphabet.value[currentId]
    else selected.value[e.target.getAttribute("id")] = ''
    if(counter == alphabet.value.length) 
    {   
        loading.value = true
        alert(`Ваш результат: ${minutes.value}.${seconds.value}`)
        addResult(JSON.parse(localStorage.getItem('user')).id, timer).then(res => {
            
        }).finally(() => {
            loading.value = false
        })
        resetTimer()
        return
    }
    currentId += 1
  }
 
};
</script>

<style scoped>


.game {
    margin-top: 70px;
}

.game__description {
    color: rgb(88, 81, 81);
    line-height: 28px;
    margin-top: 35px;
}

.game__update {
    margin-top: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
    color: rgb(88, 81, 81);
    background-color: transparent;
    text-decoration: underline;
    transition: all 0.3s;

}

.game__update:hover {
    transform:scale(1.09);
    color: black;
}

.game__timer {
    margin-top: 25px;
    color: rgb(88, 81, 81);
}

.game__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 220px;
  margin: 0 auto;
  margin-top: 15px;
  
}

.game__cell {
  margin-top: 4px;
  width: 50px;
  height: 50px;
  /* border: 1px solid black; */
  background-color: rgb(35, 102, 202);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  user-select: none;
  --notchSize: 20px;
  transition: 0.3s all;
  
  clip-path: 
    polygon(
      0% 5px,                 /* верхняя левая */
      5px 0%,                 /* верхняя левая */
      calc(100% - 5px) 0%,    /* верхняя правая */
      100% 5px,               /* верхняя правая */
      100% calc(100% - 5px),  /* нижняя правая */
      calc(100% - 5px) 100%,  /* нижняя правая */
      5px 100%,               /* нижняя левая */
      0 calc(100% - 5px)      /* нижняя левая */
    );
  
}

.game__cell:hover {
    background-color: rgb(15, 68, 146);
}






</style>
