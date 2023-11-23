const { default: Axios } = require('axios');

const axiosinstance = Axios.create({
    baseURL: 'https://vue-https-f0439-default-rtdb.firebaseio.com/',
});

axiosinstance.defaults.headers.common['nitiinstance'] =
    'niti instance header';

export default axiosinstance;