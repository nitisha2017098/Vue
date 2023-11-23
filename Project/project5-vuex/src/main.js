import { createStore } from 'vuex';
import { createApp } from 'vue'
import App from './App.vue'

const store = createStore({
    state(){
        return{
            count: 2,
        };
    },
    mutations:{
        Increment(state, payload){
            state.count = state.count + payload.value;
        }
    }
});
const app = createApp(App);
app.use(store);
app.mount('#app');
