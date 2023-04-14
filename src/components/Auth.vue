<template>
    <div v-if="loading" class="login__loading">
        <Loading/>
    </div>
    <section class="login" v-else>
        
        <div class="login__item">
            <label class="login__item__label" for="login">Введите логин: </label>
            <input type="text" class="login__item__input" placeholder="Логин" id="login" v-model="login" @input="checkInput">
        </div>

        <button class="login__btn" @click="authHandler">Войти</button>
    </section>
</template>




<script setup>
import Loading from '../ui/Loading.vue'
import { ref } from 'vue'
import {getUser} from '../axios'



const props = defineProps({
    setupUser: {
        type: Function,
        default: () => {}
    }
})
const login = ref('')
const loading = ref(false)

const authHandler = async() => {
    
    if((login.value).trim().length > 3)
    {   
        loading.value = true
        getUser((login.value).trim()).then(res => {
      
            localStorage.setItem('user', JSON.stringify(res.data))
            props.setupUser(localStorage.getItem('user'))
        }).finally(() => {loading.value = false})
    }
    
}

const checkInput = () => {
    login.value = login.value.replace(/[^a-zA-Z]/g, '');
}





</script>



<style scoped>
    .login {

        background-color: rgb(35, 102, 202);
        padding: 20px;
        border-radius: 5px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login__loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login__item__label {
        display: block;
        font-size: 20px;
    }

    .login__item__input {
        margin-top: 15px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        border-bottom: 2px solid #fff;
        outline: none;
        color: #fff;
    }
    ::-webkit-input-placeholder {
        color: #fff;
    }

    .login__btn {
        margin-top: 25px;
        background-color: #fff;
        outline: none;
        border: none;
        font-size: 25px;
        border-radius: 5px;
        cursor: pointer;
        color: rgb(35, 102, 202);
        transition: all 0.58s;
        padding: 5px;

        
        
    }

    .login__btn:hover {
        transform: scale(0.9);
    }


</style>