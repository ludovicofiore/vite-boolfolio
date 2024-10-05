<script>
import axios from 'axios';
import { store } from '@/store/store';

export default {
    name: 'Contacts',

    data(){
        return{
            name: '',
            email: '',
            message: '',

            errors: {
                name:[],
                email:[],
                message:[]
            },

            sent: false,
            isError: false,
            errorMessage: ''
        }
    },

    methods: {
        sendForm(){
            // console.log(this.name);
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            

            axios.post(store.apiUrl + 'send-email', data)
                .then(res=>{
                    console.log(res.data);
                    if(!res.data.success){
                        this.errors = res.data.errors;
                    }else{
                        this.sent = true;
                        this.errors = {
                        name:[],
                        email:[],
                        message:[]
                    }
                    }
                    
                })
                .catch(er=>{
                    console.log(er.message);
                    this.errorMessage = er.message;
                    this.isError = true;
                })
        },

        resetError(){
            this.errorMessage = '';
            this.isError = false;
        }
    }
}
</script>


<template>
<div class="contacts-container">
    <h2>Mettiti in contatto con noi</h2>

    <div v-if="!isError">
        <form action="#" @submit.prevent="sendForm" v-if="!sent">
            <div>
                <label for="name">Nome</label>
                <input v-model="name" type="text" name="name" id="name">
                <p class="error">{{ errors.name?.toString() }}</p>
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email"type="email" name="email" id="email">
                <p class="error">{{ errors.email?.toString() }}</p>
            </div>
            <div>
                <label for="message">Messaggio</label>
                <textarea v-model="message" name="message" id="message"></textarea>
                <p class="error">{{ errors.message?.toString() }}</p>
            </div>
            <button type="submit">Invia</button>
        </form>
        <h2 v-else>Messaggio inviato correttamente</h2>
    </div>

    <div v-if="isError">
        <h2>{{ errorMessage }}</h2>
        <button @click="resetError">Riprova</button>

    </div>
    

</div>

</template>

<style lang="scss" scoped>
.contacts-container {
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;

    div{
        padding: 8px 0;
        label{
            display: block;
        }
        .error{
            color: red;
            font-weight: bold;
            margin: 0;
        }
    }
}
</style>