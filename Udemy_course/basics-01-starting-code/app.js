const app = Vue.createApp({
    data(){
        return{
            CourseGoalA:"finishing the course!",
            CourseGoalB:'<h1>Building an amazing apps!</h1>',
            VueLink: 'https://vuejs.org/guide/introduction.html',
        };
    },
    methods:{
        outputGoal(){
            const randomNumber= Math.random();
            if(randomNumber < 0.5){
                return this.CourseGoalA;
            }else {
                return this.CourseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

