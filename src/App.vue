<template>
  <ConsultarEstudiante></ConsultarEstudiante>
  <GuardarEstudiante></GuardarEstudiante>
  <ActualizaEstudiante></ActualizaEstudiante>
  <EliminaEstudiante></EliminaEstudiante>
</template>

<script>
import ConsultarEstudiante from './modulos/estudiante/pages/ConsultarEstudiante.vue';
import GuardarEstudiante from './modulos/estudiante/pages/GuardarEstudiante.vue';
import ActualizaEstudiante from './modulos/estudiante/pages/ActualizaEstudiante.vue';
import EliminaEstudiante from './modulos/estudiante/pages/EliminaEstudiante.vue';
export default {
  name: 'App',
  components: {
    ConsultarEstudiante,
    GuardarEstudiante,
    ActualizaEstudiante,
    EliminaEstudiante
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
