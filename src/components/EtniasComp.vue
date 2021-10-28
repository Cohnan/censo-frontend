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
        v-for="etnia in this.registrosProp"
        :key="etnia.id_etnia"
        v-on:click="metActualizarCampos(etnia)"
      >
        <td>{{ etnia.id_etnia }}</td>
        <td>{{ etnia.nombre }}</td>
        <td>{{ etnia.descripcion }}</td>
      </tr>
    </table>
    </div>

    <div class="InputsTablaAdicional">
      <input
        type="text"
        placeholder="id"
        v-model="etniaPrelim.id_etnia"
        disabled
      />
      <input
        type="text"
        placeholder="Nombre"
        v-model="etniaPrelim.nombre"
      />
      <input
        type="text"
        placeholder="Descripcion"
        v-model="etniaPrelim.descripcion"
      />
    </div>

    <div class="BotonesCrudTablaAd">
      <button v-on:click="metAgregarEtnia">Agregar</button>
      <button v-on:click="metActualizarEtnia">Actualizar</button>
      <button v-on:click="metEliminarEtnia">Eliminar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Para procesar HTTP requests

export default {
  name: "EtniasComp",

  props: ["registrosProp"],

  data: function () {
    return {
      etnia: {
        // Hace referencia a la Etnia de la tabla de la DB seleccionada
        id_etnia: "",
        nombre: "",
        descripcion: "",
      },

      etniaPrelim: {
        // Hace referencia a la Etnia cuyos datos son los especificados en los campos
        id_etnia: "",
        nombre: "",
        descripcion: "",
      },
    };
  },

  methods: {
    metActualizarCampos: function (ocup) {
      this.etniaPrelim = { ...ocup }; // Clonando shallow, no pasando referencia al objeto
    },

    metAgregarEtnia: function () {
      /*alert(
        "Se intentara registrar una etnia con los siguientes datos:" +
          Object.entries(this.etniaPrelim)
      );*/
      axios
        .post(
          "http://127.0.0.1:8000/etnias/agregar/",
          this.etniaPrelim
        )
        .then((respuesta) => {
          alert(
            "Etnia agregada exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.etniaPrelim = {
            id_etnia: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de etnias en todos los componentes
          this.metActualizarListaEtnias();
        })
        .catch((error) => {
          alert("Error agregando etnia: " + error);
        });
    },

    metActualizarEtnia: function () {
      /*alert(
        "Se intentara registrar una etnia con los siguientes datos:" +
          Object.entries(this.etniaPrelim)
      );*/
      axios
        .put(
          "http://127.0.0.1:8000/etnias/",
          this.etniaPrelim
        )
        .then((respuesta) => {
          alert(
            "Etnia actualizada exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.etniaPrelim = {
            id_etnia: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de etnias en todos los componentes
          this.metActualizarListaEtnias();
        })
        .catch((error) => {
          alert("Error agregando etnia: " + error);
        });
    },

    metActualizarListaEtnias: function () {
      // Actualizar lista de Etnias
      axios
        .get("http://127.0.0.1:8000/etnias/")
        .then((respuesta) => {
          /*alert(
            "Exito GET respuesta.data " +
              Object.values(respuesta.data) +
              typeof respuesta.data
          );*/
          this.$emit("MsjActualizadasEtnias");
        })
        .catch((error) => {
          alert("Error actualizando lista de Etnias: " + error);
        });
    },
  },
};
</script>




