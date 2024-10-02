<script>
import {store} from '@/store/store';
import axios from 'axios';

export default {
    name: 'ProjectDetail',

    data(){
        return {
            project: {}
        }
    },

    methods: {
        getApi(slug){
            axios.get(store.apiUrl + 'project-by-slug/' + slug)
                .then(res => {
                    if(res.data.success){
                        this.project = res.data.project;
                        console.log(this.project);
                    }else {
                        console.log('404');
                        
                    }
                })
        }
    },

    mounted(){
        const slug = this.$route.params.slug;
        this.getApi(slug);
    }
}
</script>


<template>
    <h1>project detail</h1>
</template>


<style lang="scss" scoped>

</style>