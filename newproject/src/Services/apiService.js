import axios from 'axios';

// const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees'; // Example: JSONPlaceholder base URL

export default {
  getAllPosts() {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employees/table`);
  },
  getPostById(id) {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employees/table/${id}`);
  },
  createPost(data) {
    return axios.post(`http://dummy.restapiexample.com/api/v1/employees/table`, data);
  },
  updatePost(id, data) {
    return axios.put(`http://dummy.restapiexample.com/api/v1/employees/table/${id}`, data);
  },
  deletePost(id) {
    return axios.delete(`http://dummy.restapiexample.com/api/v1/employees/table/${id}`);
  },
};
