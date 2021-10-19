<template>
  <div class="OcupTabla">
    <!-- A partir de aqui podria ponerlo en un Componente distinto? -->
    <table>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
      </tr>
      <tr v-for="ocupacion in ocupaciones" :key="ocupacion.id_ocupacion" v-on:click="metActualizarCampos(ocupacion)">
        <td>{{ ocupacion.id_ocupacion }}</td>
        <td>{{ ocupacion.nombre }}</td>
        <td>{{ ocupacion.descripcion }}</td>
      </tr>
    </table>

    <div class="InputsOcupacion">
        <input type="text" placeholder="id" v-model="ocupacion.id"/>
        <input type="text" placeholder="Nombre" v-model="ocupacion.nombre"/>
        <input type="text" placeholder="Descripcion" v-model="ocupacion.descripcion"/>
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
                id: "",
                nombre: "",
                descripcion: ""
            }
        };
    },

    methods: {
        metActualizarCampos: function(ocup) {
            this.ocupacion = ocup;
        }
    }
}
</script>