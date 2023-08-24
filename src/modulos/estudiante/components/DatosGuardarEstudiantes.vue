<template>
  <div class="contenedor">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <label for="">Fecha de nacimineto</label>
    <input v-model="fechaNacimineto" type="text" />
    <label for="">Provincia</label>
    <input v-model="provincia" type="text" />
    <button @click="guardarEstudiante()" class="btn btn-outline-dark">Guardar</button>
    <label v-show="registro" for="">Exito al Ingresas</label>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimineto: null,
      provincia:null,
      registro: false,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimineto: this.fechaNacimineto + "T00:00:00",
        provincia: this.provincia,
      };
      await ingresarEstudianteFachada(data);
      this.cedula = "";
      this.nombre = "";
      this.apellido = "";
      this.fechaNacimineto = "";
      this.provincia="";
      this.registro = true;
    },
  },
  
};
</script>

<style scoped>
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
input{
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 20%;
}
</style>