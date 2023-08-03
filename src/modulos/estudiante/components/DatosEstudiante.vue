<template>
  <div>
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <button @click="consultarEstudianteAxios()">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
import { obtenerEstudianteAxiosFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const n = await obtenerEstudianteFachada(this.cedula);
      this.nombre = n.nombre;
      this.apellido = n.apellido;
    },
    async consultarEstudianteAxios() {
      const n = await obtenerEstudianteAxiosFachada(this.cedula);
      this.nombre = n.nombre;
      this.apellido = n.apellido;
    },
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>