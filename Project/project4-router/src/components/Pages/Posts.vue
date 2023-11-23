<template>
<div>
    <h3>Post Details</h3>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
            <tr v-for="post in PostDetails" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }} </td>
                <td>{{ post.description }}</td>
                <td>
                    <router-link to="/Posts" class="btn btn-primary">Show Details</router-link>
                </td>
            </tr>
        <thead>

        </thead>
    </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'My-post',
    data() {
        return {
            PostDetails: [],
        };
    },
    mounted() {
        axios
            .get(`https://vue-https-f0439-default-rtdb.firebaseio.com/Posts.json`)
            .then((response) => {
                this.formatPosts(response.data);
            });
    },
    methods: {
        formatPosts(postsData) {
            for (let key in postsData) {
                this.PostDetails.push({
                    ...postsData[key],
                    id: key
                });
            }
        }
    }
};
</script>

<style>
.table{
    align-items:normal;
}
</style>