<template>
  <EstudianteRedireccion></EstudianteRedireccion>
  <router-view></router-view>
</template>

<script>
import ConsultarEstudiante from './modulos/estudiante/pages/ConsultarEstudiante.vue';
import GuardarEstudiante from './modulos/estudiante/pages/GuardarEstudiante.vue';
import ActualizaEstudiante from './modulos/estudiante/pages/ActualizaEstudiante.vue';
import EliminaEstudiante from './modulos/estudiante/pages/EliminaEstudiante.vue';
import EstudianteRedireccion from './modulos/estudiante/components/EstudianteRedireccion.vue';
export default {
  name: 'App',
  components: {
    ConsultarEstudiante,
    GuardarEstudiante,
    ActualizaEstudiante,
    EliminaEstudiante,
    EstudianteRedireccion
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
