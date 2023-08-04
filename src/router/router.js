import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: "/actualizar",
        component: ()=> import ('../modulos/estudiante/pages/ActualizaEstudiante.vue')
    },
    {
        path: "/ingresar",
        component: ()=> import ('../modulos/estudiante/pages/GuardarEstudiante.vue')
    },
    {
        path: "/buscar/:cedula",
        component: ()=> import ('../modulos/estudiante/pages/ConsultarEstudiante.vue')
    },
    {
        path: "/eliminar",
        component: ()=> import ('../modulos/estudiante/pages/EliminaEstudiante.vue')
    },
    {
        path: "/:pathMach(.*)*",
        component: ()=> import ('../modulos/estudiante/pages/Pagina404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes
})

export default router