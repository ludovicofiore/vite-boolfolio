<script>
    import {store} from '@/store/store';
    import axios from 'axios';
    


    export default {
        
        data(){
            return {
                projects : [],
                types: [],
                technologies: [],
            }
        },

        methods: {
            getApi(){
                axios.get(store.apiUrl + 'projects').then(response => {

                    this.projects = response.data;
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
                <li v-for="(project, index) in projects" :key="index">
                    <router-link :to="{name: 'projectDetail', params: {slug: project.slug}}">{{ project.title }}</router-link>  
                </li>
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
        a {
            color: black;
            text-decoration: none;
            &:hover {text-decoration: underline;}
        }
    }

    .flex-container {
        display: flex;
        justify-content: space-between;
    }

</style>