<!-- Parte HTML de mi componente -->
<template>
  <div class="cajaFormulario">
    <h2>Agregar Persona</h2>

    <form v-on:submit.prevent="metAgregarPersona">
      <!--label for="inpNDoc">Nombre:</label-->
      <input type="number" placeholder="Número de Documento" id="inpNDoc" v-model="persona.doc_id"
      />
      <br />
      <input type="text" placeholder="Nombre Completo" v-model="persona.nombre"/>
      <br />
      <input type="date" placeholder="Fecha de Nacimiento" v-model="persona.fechadenacimiento"/>
      <br />
      <button type="submit">Iniciar Sesion</button>
    </form>
  </div>
  <div>Caja en Censar, luego de la caja de formulario <br /></div>
</template>

<!-- Parte JavaScript de mi componente -->
<script>
//import axios from "axios"; // Para procesar HTTP requests

export default {
  //Nombre del componente?
  name: "Censo",

  // Valores iniciales de variables
  data: function () {

    return { 
      // Estos valores aparecerán en el formularion en cuanto se cargue la página
      persona: { 
        tipo_doc: "",
        doc_id: null,
        nombre: "",
        fechadenacimiento: "1900-01-01",
        departamento: "",
        id_ocupacion: null,
        id_etnia: null,
        id_resguardo: null,
      },
    };
  },

  // Funcion a ejecutar al cargar la pagina
  created: async function () {
    
  },

  methods: {
    metAgregarPersona: function () {
      alert("Se intento registrar a una persona.");
    },
  },
};
</script>


<!-- Parte CSS de mi componente -->
<style>
</style>