// import Axios from 'axios';
// import { createApp } from 'vue';
// import App from './App.vue';

// Axios.defaults.baseURL = 'https://vue-https-f0439-default-rtdb.firebaseio.com/';
// Axios.defaults.headers.post['niti'] = ' post config';
// Axios.defaults.headers.get['niti'] = ' get config';

// Axios.interceptors.request.use(
//     function(config) {
//         config.headers.common['interceptorheader'] = 'Interceptor Header';
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     },
// );

// Axios.interceptors.response.use(
//     function(response) {
//         response.data = { hai: 'hai' };
//         return response;
//     },
//     function(error) {
//         return Promise.reject(error);
//     },
// );

// createApp(App).mount('#app');




import Axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';

// Set base URL for all axios requests
Axios.defaults.baseURL = 'https://vue-https-f0439-default-rtdb.firebaseio.com/';

// Set default headers for all POST and GET requests
Axios.defaults.headers.post['niti'] = 'post config';
Axios.defaults.headers.get['niti'] = 'get config';

// Add a request interceptor
Axios.interceptors.request.use(
  function (config) {

    config.headers = config.headers || {};
    config.headers.common = config.headers.common || {};
    
    // Modify the request config before sending
    config.headers.common['interceptorheader'] = 'Interceptor Header';
    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
Axios.interceptors.response.use(
  function (response) {
    // Modify the response data before resolving it
    response.data = { hii: 'hii!' };
    return response;
  },
  function (error) {
    // Handle response errors
    return Promise.reject(error);
  }
);

createApp(App).mount('#app');

