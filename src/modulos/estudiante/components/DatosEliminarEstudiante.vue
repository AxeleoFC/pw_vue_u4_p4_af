<template>
  <div class="contenedor">
    <label for="">ID</label>
    <input v-model="id" type="text" />
    <button @click="eliminarEstudiante()">Eliminar</button>
  </div>
  <label v-show="registro" for="">Exito al Eliminar {{}}</label>
</template>
  
<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
import { obtenerEstudianteAxiosFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
      nombre: null,
      registro: false,
    };
  },
  methods: {
    async eliminarEstudiante() {
      this.nombre = await obtenerEstudianteAxiosFachada("1752310126").nombre;
      await eliminarEstudianteFachada(this.id);
      this.id = "";
    },
  },
};
</script>
  
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.contenedor{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>