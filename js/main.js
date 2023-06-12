const {createApp} = Vue;

createApp({
    data(){
        return{
            greatings: 'Hello There'
        }
    },
    methods: {
        ciao(){
            console.log('Ci siamo quasi!')
        }
    },
    mounted(){
        console.log('App inizializzata')
    }
}).mount('#app');