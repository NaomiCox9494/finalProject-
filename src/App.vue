<template>
    <div class="container">
        <app-header></app-header>
        <!--ToDo: Load app-header-->
        <div class="row">
            <div class="col-xs-12">
                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import Header from './components/Header.vue';

    export default {
      data(){
        return{

        }
      },
      components:{
        appHeader: Header
      },
      created :function(){

      }


        //ToDo: On page creation dispatch 'initStocks' to the vuex $store
    }
</script>

<style>
    body {
        padding: 30px;
    }

    .slide-in-enter-active{
        transition: opacity 300ms ease;
        opacity: 0;
        animation: slide-out 300ms ease-out forwards;
    }

    .slide-in-leave-active{
        opacity: 300ms;
        transform: translateY(0);
    }

    @keyframes slide-in{
        to{
            transform: translateX(0);
        }
        from{
            transform: translateX(-30px);
        }
    }

    @keyframes slide-out{
        to{
            transform: translateX(-30px);
        }
        from{
            transform: translateX(0);
        }
    }

</style>

