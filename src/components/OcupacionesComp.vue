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
      <input type="text" placeholder="id" v-model="ocupacionPrelim.id_ocupacion" />
      <input type="text" placeholder="Nombre" v-model="ocupacionPrelim.nombre" />
      <input
        type="text"
        placeholder="Descripcion"
        v-model="ocupacionPrelim.descripcion"
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
      ocupacion: { // Hace referencia a la Ocupacion de la tabla de la DB seleccionada
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      },

      ocupacionPrelim: { // Hace referencia a la Ocupacion cuyos datos son los especificados en los campos
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      },

      //ocupaciones: [] // Este ocupaciones se creo luego del props, y con el props funcionaba hasta agregar persona
    };
  },

  methods: {
    metActualizarCampos: function (ocup) {
      this.ocupacionPrelim = {... ocup}; // Clonando, no pasando referencia al objeto
    },

    metAgregarOcupacion: async function () {
      alert(
        "Se intentara registrar una ocupacion con los siguientes datos:" +
          Object.entries(this.ocupacionPrelim)
      );
      axios
        .post("http://127.0.0.1:8000/ocupaciones/agregar/", this.ocupacionPrelim)
        .then((respuesta) => {
          alert("Ocupacion agregada exitosamente!: " + respuesta.data);
        })
        .catch((error) => {
          alert("Error: " + error);
        });

      // Actualizar tabla

      // Borrar campos
      this.ocupacionPrelim = {
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      };
    },
  },
};
</script>