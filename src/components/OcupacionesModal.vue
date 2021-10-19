<script>
import OcupacionesComp from "./OcupacionesComp.vue";

export default {
  name: "OcupacionesModalComp",
  methods: {
    metCerrarMOcupaciones() {
      this.$emit("msjCerrarMOcupaciones");
    },
  },

  components: {
    OcupacionesComp,
  },
};
</script>

<template>
  <div class="ModalOcupBack">
    <!-- Llena toda la pantalla -->
    <div class="ModalOcupCuadro">
      <!-- El cuadro donde está la información -->
      <OcupacionesComp /> <!-- El Componente con el CRUD de Ocupaciones -->

      <button v-on:click="metCerrarMOcupaciones" id="btnCerrarOcupModal">X</button>
    </div>
  </div>
</template>

<style>
.ModalOcupBack {
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

.ModalOcupCuadro {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}
</style>