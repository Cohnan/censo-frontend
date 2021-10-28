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
        v-for="resguardo in this.registrosProp"
        :key="resguardo.id_resguardo"
        v-on:click="metActualizarCampos(resguardo)"
      >
        <td>{{ resguardo.id_resguardo }}</td>
        <td>{{ resguardo.nombre }}</td>
        <td>{{ resguardo.descripcion }}</td>
      </tr>
    </table>
    </div>

    <div class="InputsTablaAdicional">
      <input
        type="text"
        placeholder="id"
        v-model="resguardoPrelim.id_resguardo"
        disabled
      />
      <input
        type="text"
        placeholder="Nombre"
        v-model="resguardoPrelim.nombre"
      />
      <input
        type="text"
        placeholder="Descripcion"
        v-model="resguardoPrelim.descripcion"
      />
    </div>

    <div class="BotonesCrudTablaAd">
      <button v-on:click="metAgregarResguardo">Agregar</button>
      <button v-on:click="metActualizarResguardo">Actualizar</button>
      <button v-on:click="metEliminarResguardo">Eliminar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Para procesar HTTP requests

export default {
  name: "ResguardosComp",

  props: ["registrosProp"],

  data: function () {
    return {
      resguardo: {
        // Hace referencia a la Resguardo de la tabla de la DB seleccionada
        id_resguardo: "",
        nombre: "",
        descripcion: "",
      },

      resguardoPrelim: {
        // Hace referencia a la Resguardo cuyos datos son los especificados en los campos
        id_resguardo: "",
        nombre: "",
        descripcion: "",
      },
    };
  },

  methods: {
    metActualizarCampos: function (ocup) {
      this.resguardoPrelim = { ...ocup }; // Clonando shallow, no pasando referencia al objeto
    },

    metAgregarResguardo: function () {
      /*alert(
        "Se intentara registrar una resguardo con los siguientes datos:" +
          Object.entries(this.resguardoPrelim)
      );*/
      axios
        .post(
          "http://127.0.0.1:8000/resguardos/agregar/",
          this.resguardoPrelim
        )
        .then((respuesta) => {
          alert(
            "Resguardo agregada exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.resguardoPrelim = {
            id_resguardo: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de resguardos en todos los componentes
          this.metActualizarListaResguardos();
        })
        .catch((error) => {
          alert("Error agregando resguardo: " + error);
        });
    },

    metActualizarResguardo: function () {
      /*alert(
        "Se intentara registrar una resguardo con los siguientes datos:" +
          Object.entries(this.resguardoPrelim)
      );*/
      axios
        .put(
          "http://127.0.0.1:8000/resguardos/",
          this.resguardoPrelim
        )
        .then((respuesta) => {
          alert(
            "Resguardo actualizado exitosamente!: " +
              //Object.entries(respuesta.data.registro)
              JSON.stringify(respuesta.data.registro, null, 2)
          );

          // Borrar campos
          this.resguardoPrelim = {
            id_resguardo: "",
            nombre: "",
            descripcion: "",
          };
          
          // Actualizar Variable y Lista de resguardos en todos los componentes
          this.metActualizarListaResguardos();
        })
        .catch((error) => {
          alert("Error agregando resguardo: " + error);
        });
    },

    metActualizarListaResguardos: function () {
      // Actualizar lista de Resguardos
      axios
        .get("http://127.0.0.1:8000/resguardos/")
        .then((respuesta) => {
          /*alert(
            "Exito GET respuesta.data " +
              Object.values(respuesta.data) +
              typeof respuesta.data
          );*/
          this.$emit("MsjActualizadosResguardos");
        })
        .catch((error) => {
          alert("Error actualizando lista de Resguardos: " + error);
        });
    },
  },
};
</script>




