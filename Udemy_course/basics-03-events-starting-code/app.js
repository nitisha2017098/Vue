const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods:{

    submitform(){
        alert('Submitted');
    },

    setname(event, Lastname){
        this.name = event.target.value+ '' + Lastname;
    },
    add(num){
      this.counter = this.counter+num;
      // this.counter++;
    },
    sub(num){
      this.counter = this.counter-num;
      // this.counter--;
    }
  }
});

app.mount('#events');
