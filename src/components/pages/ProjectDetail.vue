<script>
import {store} from '@/store/store';
import axios from 'axios';
import {getType, getTechnologies} from '../data/utils';

export default {
    name: 'ProjectDetail',

    data(){
        return {
            project: {
                title: '',
                description: '',
                cover_img: '',
                publication_date: '',
                type: {},
                technology: []
            },
            getType,
            getTechnologies
        }
    },

    methods: {
        getApi(slug){
            axios.get(store.apiUrl + 'project-by-slug/' + slug)
                .then(res => {
                    if(res.data.success){
                        this.project = res.data.project;
                        // console.log(this.project.technology.length);
                    }else {
                        console.log('404');
                        
                    }
                })
        }
    },

    // computed: {
    //     infoProject(){
    //         const type = getType(this.project);
    //         const technologies = getTechnologies(this.project);
    //         // console.log(technologies);
            
    //         return `Tipologia: ${type}
    //                 Tecnologie: ${technologies}`
    //     }
    // },

    mounted(){
        const slug = this.$route.params.slug;
        this.getApi(slug);
    }
}
</script>


<template>
    <div class="project-container">
        <h2>Titolo: {{ project.title }}</h2>

        <h4>Descrizione</h4>
        <p>{{ project.description }}</p>

        <!-- <p>{{ infoProject }}</p> -->

        <h4>Tipologia</h4>
        <p>{{ getType(project) }}</p>

        <h4>Tecnologie</h4>
        <p>{{ getTechnologies(project)}}</p>

        <div class="img-container">
            <img :src="project.cover_img" :alt="project.title">
        </div>

        <h4>Data di pubblicazione</h4>
        <p>{{ project.publication_date}}</p>
    </div>
</template>


<style lang="scss" scoped>
.project-container{
    width: 80%;
    margin: 0 auto;
}

.img-container{
    width: 60%;
    img{
        max-width: 100%;
    }
}

</style>