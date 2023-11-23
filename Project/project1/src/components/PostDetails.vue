<template>
<div>
    <h2>Post Details</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>About</th>
                <th>Delete</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in postDetails" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.Name }}</td>
                <td>{{ post.About }}</td>
                <td><button @click="getDeleted(post.id)">Delete</button></td>
                <td><button @click="getUpdated(post)">Edit</button></td>
            </tr>
        </tbody>
    </table>

    <div v-if="showUpdateModal" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeUpdateModal">&times;</span>
            <h2>Update Post</h2>
            <form @submit.prevent="updatePost">
                <label for="updateName">Name:</label>
                <input type="text" id="updateName" v-model="updatedPost.Name" required><br><br>
                <label for="updateAbout">About:</label>
                <input type="text" id="updateAbout" v-model="updatedPost.About" required><br><br>
                <button type="submit">Update</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import axiosinstance from '../services/axiosinstance.js';
export default {
    data() {
        return {
            postDetails: [],
            showUpdateModal: false,
            updatedPost: {
                id: null,
                Name: '',
                About: ''
            }
        };
    },
    mounted() {
        this.getPostDetails();
    },

    methods: {
        getPostDetails() {
            axiosinstance.get(`posts.json`).then((response) => {
                console.log(response);
                this.formatPostDetails(response.data);
            });
        },
        populatePostDetails(posts) {
            this.postDetails = [];
            for (let key in posts) {
                this.postDetails.push({
                    ...posts[key],
                    id: key
                });
            }
        },
        formatPostDetails(posts) {
            for (let key in posts) {
                this.postDetails.push({
                    ...posts[key],
                    id: key
                });
            }
            console.log(this.postDetails);
        },
        getDeleted(postId) {
            axiosinstance.delete(`posts/${postId}.json`)
                .then(() => {
                    this.postDetails = this.postDetails.filter(post => post.id !== postId);
                    console.log('Post deleted successfully');
                })
                .catch((error) => {
                    console.error('Error deleting the post:', error);
                })
        },
        getUpdated(post) {
            this.updatedPost = {
                ...post
            };
            this.showUpdateModal = true;
        },
        closeUpdateModal() {
            this.showUpdateModal = false;
            this.updatedPost = {
                id: null,
                Name: '',
                About: ''
            };
        },
        updatePost() {
            axiosinstance.put(`posts/${this.updatedPost.id}.json`, {
                    Name: this.updatePost.Name,
                    About: this.updatePost.About
                })
                .then(() => {
                    const index = this.postDetails.findIndex(post => post.id === this.updatedPost.id);
                    if (index != -1) {
                        this.postDetails[index] = {
                            ...this.updatedPost
                        };
                    }
                    this.closeUpdateModal();
                    this.refreshPostDetails();
                    console.log('Post Updated Successfully!');

                })
                .catch((error) => {
                    console.error('Error updating the post:', error);
                });
        },
        refreshPostDetails() {
            axiosinstance.get(`posts.json`).then((response) => {
                this.populatePostDetails(response.data);
            });
        }
    },
};
</script>
