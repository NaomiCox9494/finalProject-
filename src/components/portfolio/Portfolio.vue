<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock"> {{stock}}</app-stock>
        <!--ToDo: Load app-stock component-->
            <!--ToDo: Loop through stock in stocks using v-for-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for-->
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue'
    //ToDo: Import mapGetters from vuex
    //ToDo: Import Stock from ./Stock.vue

    export default {
        computed: {
            ...mapGetters({
              stocks: 'stockPortfolio'
            })
        },
        components:{
          appStock : Stock
        }

        //ToDo: Initialize Stock component and name it appStock
    }
</script>