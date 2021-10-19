<script>
  export default {
    name: 'CompMOcupaciones',
    methods: {
      metCerrarMOcupaciones() {
        this.$emit('msjCerrarMOcupaciones');
      },
    },
  };
</script>

<template>
    <div class="ModalOcupBack">
        <div class="ModalOcupCuadro">
            <div class="OcupTabla">
                <table>
                    <tr>
                        <th> id </th>
                        <th> Nombre </th>
                        <th> Descripcion </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Nom </td>
                        <td> Des </td>
                    </tr>
                </table>
            </div>
            <div class="OcupacionesFormulario">
                d
            </div>

            <button v-on:click="metCerrarMOcupaciones"> X </button>
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
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

</style>