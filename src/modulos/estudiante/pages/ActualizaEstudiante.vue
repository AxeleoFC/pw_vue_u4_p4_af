<template>
  <div class="container">
    <label for="">Actualizar</label>
    <DatosActualizarEstudiante></DatosActualizarEstudiante>
  </div>
</template>

<script>
import DatosActualizarEstudiante from '../components/DatosActualizarEstudiante.vue';
export default {
    components:{
        DatosActualizarEstudiante
    }
}
</script>

<style>
.container{
  margin: 10px;
}
</style>