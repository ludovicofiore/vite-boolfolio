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
    <div class="works-container">

        <h1>Elenco dei progetti:</h1>

        <div>
            <ul>
                <li v-for="(work, index) in works" :key="index">{{ work.title }}</li>
            </ul>
        </div>
    </div>

</template>


<style lang="scss" scoped>
    .works-container{
        width: 80%;
        margin: 0 auto;
        padding: 10px 0;
    }

    li {
        margin: 5px 0;
    }

</style>