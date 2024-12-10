import {createRouter, createWebHistory} from 'vue-router'
import Ejemplo from '../views/ejemplo.vue'

const routes =[

    {
        path:'/ages',
        name: 'Ages',
        component: Ejemplo,
    }

]


const router= createRouter({
    history:createWebHistory(),
    routes,
})

export default router;