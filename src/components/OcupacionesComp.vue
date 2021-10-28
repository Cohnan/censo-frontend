<template>
  <div class="CrudTablaAdicional">
    <!-- A partir de aqui podria ponerlo en un Componente distinto? -->
    <div  class="tablaAdicionales">
    <table>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Descripcion</th>
      </tr>
      <tr
        v-for="ocupacion in this.registrosProp"
        :key="ocupacion.id_ocupacion"
        v-on:click="metActualizarCampos(ocupacion)"
      >
        <td>{{ ocupacion.id_ocupacion }}</td>
        <td>{{ ocupacion.nombre }}</td>
        <td>{{ ocupacion.descripcion }}</td>
      </tr>
    </table>
    </div>

    <div class="InputsTablaAdicional">
      <input
        type="text"
        placeholder="id"
        v-model="ocupacionPrelim.id_ocupacion"
        disabled
      />
      <input
        type="text"
        placeholder="Nombre"
        v-model="ocupacionPrelim.nombre"
      />
      <input
        type="text"
        placeholder="Descripcion"
        v-model="ocupacionPrelim.descripcion"
      />
    </div>

    <div class="BotonesCrudTablaAd">
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

  props: ["registrosProp"],

  data: function () {
    return {
      ocupacion: {
        // Hace referencia a la Ocupacion de la tabla de la DB seleccionada
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      },

      ocupacionPrelim: {
        // Hace referencia a la Ocupacion cuyos datos son los especificados en los campos
        id_ocupacion: "",
        nombre: "",
        descripcion: "",
      },
    };
  },

  methods: {
    metActualizarCampos: function (ocup) {
      this.ocupacionPrelim = { ...ocup }; // Clonando shallow, no pasando referencia al objeto
    },

    metAgregarOcupacion: function () {
      /*alert(
        "Se intentara registrar una ocupacion con los siguientes datos:" +
          Object.entries(this.ocupacionPrelim)
      );*/
      axios
        .post(
          "http://127.0.0.1:8000/ocupaciones/agregar/",
          this.ocupacionPrelim
        )
        .then((respuesta) => {
          alert(
            "Ocupacion agregada exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.ocupacionPrelim = {
            id_ocupacion: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de ocupaciones en todos los componentes
          this.metActualizarListaOcupaciones();
        })
        .catch((error) => {
          alert("Error agregando ocupacion: " + error);
        });
    },

    metActualizarOcupacion: function () {
      /*alert(
        "Se intentara registrar una ocupacion con los siguientes datos:" +
          Object.entries(this.ocupacionPrelim)
      );*/
      axios
        .put(
          "http://127.0.0.1:8000/ocupaciones/",
          this.ocupacionPrelim
        )
        .then((respuesta) => {
          alert(
            "Ocupacion actualizada exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.ocupacionPrelim = {
            id_ocupacion: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de ocupaciones en todos los componentes
          this.metActualizarListaOcupaciones();
        })
        .catch((error) => {
          alert("Error agregando ocupacion: " + error);
        });
    },

    metActualizarListaOcupaciones: function () {
      // Actualizar lista de Ocupaciones
      axios
        .get("http://127.0.0.1:8000/ocupaciones/")
        .then((respuesta) => {
          /*alert(
            "Exito GET respuesta.data " +
              Object.values(respuesta.data) +
              typeof respuesta.data
          );*/
          this.$emit("MsjActualizadasOcupaciones");
        })
        .catch((error) => {
          alert("Error actualizando lista de Ocupaciones: " + error);
        });
    },
  },
};
</script>




