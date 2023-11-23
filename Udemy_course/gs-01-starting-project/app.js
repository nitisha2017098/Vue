Vue.createApp({
    data(){
        return{
            Goal:[],
            EnteredValue:'',
        };
    },
    methods: {
        AddGoals(){
            this.Goal.push(this.EnteredValue);
            this.EnteredValue = '';
        }
    }
}).mount('#app');



// *********** This is only (vanilla) Javascrip**************
// const buttonEL = document.querySelector('button');
// const inputEL = document.querySelector('input');
// const ListEL = document.querySelector('ul');

// function AddGoal() {
//     const enteredValue = inputEL.value;
//     const listItemEL = document.createElement('li');
//     listItemEL.textcontent = enteredValue;
//     ListEL.appendChild(listItemEL);
//     inputEL.value = "";

// }
// buttonEL.addEventListener('click', AddGoal);
