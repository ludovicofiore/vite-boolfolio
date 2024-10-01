<script>
    import {store} from '@/store/store';
    import axios from 'axios';
    


    export default {
        
        data(){
            return {
                works : [],
                types: [],
                technologies: [],
            }
        },

        methods: {
            getApi(){
                axios.get(store.apiUrl + 'works').then(response => {

                    this.works = response.data;
                    // console.log(this.works);
                }),

                axios.get(store.apiUrl + 'types').then(response => {

                    this.types = response.data;
                    // console.log(this.types);
                }),

                axios.get(store.apiUrl + 'technologies').then(response => {

                    this.technologies = response.data;
                    // console.log(this.technologies);
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

        <div class="flex-container">

            <ul>
                <li v-for="(work, index) in works" :key="index">{{ work.title }}</li>
            </ul>

            <div>
                <h3>Tipologie:</h3>
                <ul>
                    <li v-for="(type, index) in types" :key="index">{{ type.name }}</li>
                </ul>

                <h3>Tecnologie:</h3>
                <ul>
                    <li v-for="(technology, index) in technologies" :key="index">{{ technology.name }}</li>
                </ul>
            </div>
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

    .flex-container {
        display: flex;
        justify-content: space-between;
    }

</style>