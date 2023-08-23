<template>
  <div class="contenedor">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <button @click="consultarEstudiante()">Consultar</button>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";
import { obtenerEstudianteAxiosFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: this.$route.params.cedula,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarEstudiante(cedula) {
      const n = await obtenerEstudianteFachada(cedula);
      this.nombre = n.nombre;
      this.apellido = n.apellido;
    },
    async consultarEstudianteAxios() {
      const n = await obtenerEstudianteAxiosFachada(this.cedula);
      this.nombre = n.nombre;
      this.apellido = n.apellido;
    },
  },
  mounted(){
    const {cedula}=this.$route.params
    const {ciudad}=this.$route.query
    this.cedula=cedula
    console.log(ciudad)
    this.consultarEstudiante(cedula)
    console.log(this.$route)
  }
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
  width: 100%;
}
</style>