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

    <div class="InputsOcupacion">
        <input type="text" placeholder="id" readonly/>
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Descripcion"/>
    </div>

    <div class="CRUD">
        <button> Agregar </button>
        <button> Actualizar </button>
        <button> Eliminar </button>
    </div>

  </div>
</template>

<script>
export default {
    name: "OcupacionesComp",

    props: ['ocupaciones'],

    data: function () {
        return {
            ocupacion: {
                nombre: "",
                descripcion: ""
            }
        };
    },

    methods: {
        
    }
}
</script>