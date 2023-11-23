const app = Vue.createApp({
    data(){
        return{
            enteredValue: '',
            tasks: [],
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredValue);
        },
        listshowButton(){
            
        }
    }

});
app.mount('#assignment');