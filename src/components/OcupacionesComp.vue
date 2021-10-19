<template>
  <div class="OcupTabla">
    <!-- A partir de aqui podria ponerlo en un Componente distinto? -->
    <table>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
      </tr>
      <tr v-for="ocupacion in ocupaciones" :key="ocupacion.id_ocupacion">
        <td>{{ ocupacion.id_ocupacion }}</td>
        <td>{{ ocupacion.nombre }}</td>
        <td>{{ ocupacion.descripcion }}</td>
      </tr>
    </table>

    <button v-on:click="mostrarOcupaciones"> Mostrar Ocupaciones</button> <br />

  </div>
</template>

<script>
export default {
    name: "OcupacionesComp",

    props: ['ocupaciones'],

    methods: {
        mostrarOcupaciones: function () {
            alert("Ocupaciones que llegaron a OcupacionesComp: " + this.ocupaciones);
        }
    }
}
</script>