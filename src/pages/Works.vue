<script>
    import {store} from '@/store/store';
    import axios from 'axios';
    


    export default {
        
        data(){
            return {
                works : [],
            }
        },

        methods: {
            getApi(){
                axios.get(store.apiUrl + 'works').then(response => {
                    // console.log(response.data);

                    this.works = response.data;
                    console.log(this.works);
                    
                    
                })
                
            }
        },

        mounted(){
            this.getApi()
        }
    }

</script>


<template>
<h1>works</h1>

</template>


<style lang="scss">

</style>