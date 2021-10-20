<template>
  <!-- Llena toda la pantalla -->
  <div class="ModalBack">
    <!-- El cuadro donde está la información -->
    <div class="ModalCuadro">
      <!-- Header -->
      <header class="modal-header">
        <slot name="header">
          <h2> Ocupaciones </h2>
        </slot>
        <button
          type="button"
          class="btn-close-X"
          @click="metCerrarModal"
          aria-label="Close modal"
        >
          X
        </button>
      </header>


      <section class="modal-body">
      <!-- El Componente con el CRUD de Ocupaciones -->
      <OcupacionesComp
        :registrosProp="this.registrosProp"
        v-on:MsjActualizadasOcupaciones="metReenviarMsjOcupaciones"
        :key="this.registrosProp[this.registrosProp.length -1].id_ocupacion"
      />
      </section>

      <footer>
        <button v-on:click="metCerrarModal" id="btnCerrarModal">
          Cerrar
        </button>
      </footer>
    </div>
  </div>
</template>





<script>
import OcupacionesComp from "./OcupacionesComp.vue";

export default {
  name: "OcupacionesModalComp",
  methods: {
    metCerrarModal() {
      this.$emit("msjCerrarModal");
    },

    metReenviarMsjOcupaciones() {
      /*alert(
        "Se esta reenviando el mensaje de actualizacion en OcupacionesModal"
      );*/
      this.$emit("MsjActualizadasOcupaciones");
    },
  },

  components: {
    OcupacionesComp,
  },

  props: ["registrosProp"],
};
</script>





<style>
.ModalBack {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ModalCuadro {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>