<template>
    <div class="contenedor">
        <router-link to="/ingresar">Ingresar</router-link>
        <router-link to="/buscar">Buscar</router-link>
        <router-link to="/actualizar">Actualizar</router-link>
        <router-link to="/eliminar">Eliminar</router-link>
    </div>
</template>
  
<script scoped>
export default {
}
</script>
  
<style scoped>
.contenedor {
  font-weight: bold;
  color: #232525;
  margin: 40px;
  padding: 10px 30px; /* Corregir aquí agregando las unidades de medida */
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

/* Agregar margen entre los router-link dentro del contenedor */
.contenedor router-link:not(:last-child) {
  margin-right: 10px;
}

div,a{
    background: blue;
    font-weight: bold;
    color: #232525;
    margin: 40px;
}
</style>






