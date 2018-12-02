<template>
    <div>
        <app-stock :v-for="stock in stocks"></app-stock>
        <!--ToDo: Load app-stock component-->
            <!--ToDo: Loop through stock in stocks using v-for-->
            <!--ToDo: Bind to stock using : and pass stock from the v-for-->
    </div>
</template>

<script>
    import Stock from './Stock.vue'
    //ToDo: Import Stock from ./Stock.vue

    export default {
      components:{
        appStock : Stock
      },
        //ToDo: Initialize Stock component and name it appStock

        computed: {
            stocks(){
              return $store.getters.stocks;
            }
            //ToDo: Create stocks computer method
                // ToDo: Return $store.getters.stocks
        }
    }
</script>