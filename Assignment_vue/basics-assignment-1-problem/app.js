const app = Vue.createApp({
    data(){
        return{
            name:'Niti',
            age:'21',
            Image:'image_url',
        }
    },
    methods:{
        randNum(){
            const randomNumber = Math.random();
            return randomNumber;
        },
        age_5(){
           const add = this.age+5;
           return add;
        }
    }

});
app.mount('#assignment');