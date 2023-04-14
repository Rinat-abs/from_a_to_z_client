import { createRouter, createWebHistory } from "vue-router";
import GameView from '../views/GameView.vue'
import RatingView from '../views/RatingView.vue'
import MyResultsView from '../views/MyResultsView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: GameView
        },
        {
            path: '/rating',
            name: 'rating',
            component: RatingView
        },
        {
            path: '/my_result',
            name: 'my_result',
            component: MyResultsView
        }
]

})

export default router