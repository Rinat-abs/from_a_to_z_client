<template>
    <nav class="menu">
        <router-link to="/" class="menu__item">Главная</router-link>
        <router-link to="/rating" class="menu__item">Общий рейтинг</router-link>
        <router-link to="/my_result" class="menu__item">Мои результаты</router-link>
        <a  class="menu__item" @click="exitUser">Выйти </a>
    </nav>
</template>


<script setup>
    const props = defineProps({
    exitUser: {
        type: Function,
        default: () => {}
    }
})
</script>

<style scoped>

.menu {
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.menu a.router-link-exact-active {

  background-color: #fff;
  color: rgb(35, 102, 202);
}

.menu__item {
    
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    padding: 5px;
    cursor: pointer;
    border: 1px solid rgb(35, 102, 202);
    background-color: rgb(35, 102, 202);
    border-radius: 5px;
    transition: all 0.3s;
    
}


.menu__item:hover {
    background-color: #fff;
  color: rgb(35, 102, 202);
    
}

@media(max-width: 550px) {
    .menu__item {
        font-size: 15px;
    }

    
}

@media(max-width: 415px) {
    .menu__item {
        margin-top: 10px;
        width: 40%;
    }

    
}



</style>