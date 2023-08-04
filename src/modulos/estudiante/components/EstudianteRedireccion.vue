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
  display: flex;
  justify-content: center;
  flex-direction: row;
}


div{
    background: gray;
    padding-block: 20px;
    font-weight: bold;
    color: #232525;
    position: fixed;
    width: 100%;
    top: 0;
}
a{
  padding-inline: 30px;
}
</style>






