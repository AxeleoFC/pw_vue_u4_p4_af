<template>
  <EstudianteRedireccion></EstudianteRedireccion>
  <router-view></router-view>
</template>

<script>
import EstudianteRedireccion from './modulos/estudiante/components/EstudianteRedireccion.vue';
export default {
  name: 'App',
  components: {
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
  background: coral;
}
</style>
