<!-- Parte HTML de mi componente -->
<template>
  <div class="cajaFormulario">
    <h2>Agregar Persona</h2>

    <form v-on:submit.prevent="metAgregarPersona">
      <!-- Tipo de Documento -->
      <select
        name="Nombre Combobox Tipo de Doc"
        id="inpTipoDoc"
        v-model="persona.tipo_doc"
      >
        <option value="">Tipo de Documento</option>
        <!-- Generación de múltiples Options usando un for:
        El uso de `:` antes del nombre de un atributo hace que Vue intervenga
        Por ejemplo: :value="nombre" permite que el atribute value de la etiquet  option tenga el valor variable nombre
        -->
        <option
          v-for="(valor, nombre) in tipoDocumentos"
          :key="nombre"
          :value="nombre"
        >
          {{ valor }}
        </option>
      </select>

      <br />

      <!-- Número de Documento -->
      <!--label for="inpNDoc">Numero de Documento:</label-->
      <input
        type="number"
        placeholder="Número de Documento"
        id="inpNDoc"
        v-model="persona.doc_id"
      />
      <br />

      <!-- Nombre -->
      <input
        type="text"
        placeholder="Nombre Completo"
        v-model="persona.nombre"
      />
      <br />

      <!-- Fecha de Nacimiento -->
      <input
        type="date"
        placeholder="Fecha de Nacimiento"
        v-model="persona.fechadenacimiento"
      />
      <br />

      <!-- Departamento de Residencia -->
      <select
        id="inpDepartamento"
        v-model="persona.departamento"
        placeholder="Departamento de Residencia"
      >
        <option value="null">Dapartamento de Residencia</option>
        <option
          v-for="departamento of departamentos"
          :key="departamento"
          :value="departamento"
        >
          {{ departamento }}
        </option>
      </select>
      <br />

      <!-- Ocupación -->
      <select id="inpOcupacion" v-model="persona.id_ocupacion">
        <option value="null">Ocupación</option>
        <option
          v-for="ocupacion in ocupaciones"
          :key="ocupacion.id_ocupacion"
          :value="ocupacion.id_ocupacion"
        >
          {{ ocupacion.nombre }}
        </option>
      </select>
      <br />

      <!-- Etnia -->
      <select id="inpEtnia" v-model="persona.id_etnia">
        <option value="null">Etnia</option>
        <option v-for="etnia in etnias" :key="etnia.id_etnia" :value="etnia.id_etnia">
          {{ etnia.nombre }}
        </option>
      </select>
      <br />

      <!-- Resguardo -->
      <select id="inpResguardo" v-model="persona.id_resguardo">
        <option value="null">Resguardo</option>
        <option
          v-for="resguardo in resguardos"
          :key="resguardo.id_resguardo"
          :value="resguardo.id_resguardo"
        >
          {{ resguardo.nombre }}
        </option>
      </select>
      <br />

      <!-- Enviar Formulario -->
      <button type="submit">Agregar</button>
      <br />
    </form>

    <button v-on:click="metTraerOcupaciones">Actualizar Ocupaciones</button>
  </div>

  <div>Caja en Censar.vue, luego de la caja de formulario <br /></div>
</template>

<!-- Parte JavaScript de mi componente -->
<script>
import axios from "axios"; // Para procesar HTTP requests

export default {
  //Nombre del componente?
  name: "Censo",

  // Valores iniciales de variables
  data: function () {
    return {
      // Estos valores aparecerán en el formularion en cuanto se cargue la página

      // Define el v-modelo?
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

      // JSON de tipos de documentos: la llave es el valor que se envía, el valor es lo que el usuario lee
      tipoDocumentos: {
        CC: "Cédula de Ciudadanía",
        TI: "Tarjeta de Identidad",
        Otro: "Otro",
      },

      // Lista de Departamentos
      departamentos: ["Amazonas", "Boyacá", "Guajira", "Cundinamarca"],

      // Lista de Ocupaciones
      ocupaciones: [],

      // Lista de Etnias
      etnias: [],

      // Lista de Resguardos
      resguardos: []
    };
  },

  // Funcion a ejecutar al cargar la pagina
  created: async function () {
    this.metTraerOcupaciones();
    this.metTraerEtnias();
    this.metTraerResguardos();
  },

  // Métodos auxiliares a ejecutar dadas ciertas acciones en este componente
  methods: {
    // Metodo para enviar formulario de Registro de Persona
    metAgregarPersona: function () {
      alert(
        "Se intento registrar una persona con los siguientes datos:" +
          Object.entries(this.persona) +
          Object.values(this.persona)
      );
    },

    metTraerOcupaciones: async function () {
      axios
        .get('http://127.0.0.1:8000/ocupaciones/')
        .then(respuesta => {
          this.ocupaciones = respuesta.data;
        })
        .catch(error => {
          alert("Errores: ", error);
        });
    },

    metTraerEtnias: async function () {
      axios
        .get('http://127.0.0.1:8000/etnias/')
        .then(respuesta => {
          this.etnias = respuesta.data;
        })
        .catch(error => {
          alert("Errores: ", error);
        });
    },

    metTraerResguardos: async function () {
      axios
        .get('http://127.0.0.1:8000/resguardos/')
        .then(respuesta => {
          this.resguardos = respuesta.data;
        })
        .catch(error => {
          alert("Errores: ", error);
        });
    },
  },
};
</script>


<!-- Parte CSS de mi componente -->
<style>
</style>