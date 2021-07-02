<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Solicitar Usuarios</h2>
      <hr>
      
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxiosAsync()"> AXIOS ASYNC AWAIT</button>  
      <button class="btn btn-success my-3 mr-3" @click="getUsuariosAxiosThen()">AXIOS THEN CATCH</button>  
       

      <div v-if="$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(usuario,index) in $store.state.usuarios" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{usuario[col]}}</td>
          </tr>
        </table>
        <h4 class="alert alert-primary">Se encontraron {{$store.state.usuarios.length}} datos</h4>
      </div>
      <h4 v-else class="alert alert-danger">No se encontraron datos</h4>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'Teoria',
    props: [],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      getUsuariosAxiosThen() {
          this.$store.dispatch('getUsuariosAxiosThen')
      },
      async getUsuariosAxiosAsync() {
         this.$store.dispatch('getUsuariosAxiosAsync')
      }
    },
    computed: {
      getCols() {
        return Object.keys(this.$store.state.usuarios[0])
      }
    }
}
</script>



<style scoped lang="css">
.jumbotron{
  background-color: #c1f0d4f6;
}
td,th{
  background-color: #649783;
}
hr{
  background-color: #0f0e0e;
}
</style>