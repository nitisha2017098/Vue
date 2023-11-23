const app = Vue.createApp({
  data() {
    return { 
      enteredgoalvalue: '',
      goals: [] 
    };
  },
  methods:{
    addGoal(){
        this.goals.push(this.enteredgoalvalue);
    },
    removegoal(idx){
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');

