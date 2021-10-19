<template>
  <div class="OcupTabla">
    <!-- A partir de aqui podria ponerlo en un Componente distinto? -->
    <table>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
      </tr>
      <tr
        v-for="ocupacion in ocupaciones"
        :key="ocupacion.id_ocupacion"
        v-on:click="metActualizarCampos(ocupacion)"
      >
        <td>{{ ocupacion.id_ocupacion }}</td>
        <td>{{ ocupacion.nombre }}</td>
        <td>{{ ocupacion.descripcion }}</td>
      </tr>
    </table>

    <div class="InputsOcupacion">
      <input type="text" placeholder="id" v-model="ocupacion.id_ocupacion" />
      <input type="text" placeholder="Nombre" v-model="ocupacion.nombre" />
      <input
        type="text"
        placeholder="Descripcion"
        v-model="ocupacion.descripcion"
      />
    </div>

    <div class="CRUD">
      <button v-on:click="metAgregarOcupacion">Agregar</button>
      <button v-on:click="metActualizarOcupacion">Actualizar</button>
      <button v-on:click="metEliminarOcupacion">Eliminar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Para procesar HTTP requests

export default {
  name: "OcupacionesComp",

  props: ["ocupaciones"],

  data: function () {
    return {
      ocupacion: {
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      },

      //ocupaciones: [] // Este ocupaciones se creo luego del props, y con el props funcionaba hasta agregar persona
    };
  },

  methods: {
    metActualizarCampos: function (ocup) {
      this.ocupacion = ocup;
    },

    metAgregarOcupacion: async function () {
      alert(
        "Se intentara registrar una ocupacion con los siguientes datos:" +
          Object.entries(this.ocupacion)
      );
      axios
        .post("http://127.0.0.1:8000/ocupaciones/agregar/", this.ocupacion)
        .then((respuesta) => {
          alert("Ocupacion agregada exitosamente!: " + respuesta.data);
        })
        .catch((error) => {
          alert("Error: " + error);
        });

      // Actualizar tabla

      // Borrar campos
      this.ocupacion = {
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      };
    },
  },
};
</script>