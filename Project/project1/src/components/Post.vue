<template>
    <div>
        <h2>Create Post</h2>
        <hr />

        <div class="alert alert-success" v-if="isSuccess">
            Post Created Successfully
        </div>
        <form @submit.prevent="onCreatePost">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="Name" />
            </div>
            <div class="form-group">
                <label>About</label>
                <textarea
                    class="form-control"
                    v-model="About"
                ></textarea>
            </div>

            <div class="mt-3">
                <button type="submit" class="btn btn-primary">
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'My-Post',
    data() {
        return {
            Name: '',
            About: '',
            isSuccess: false,
        };
    },
    methods: {
        onCreatePost() {
            axios
                .post(`posts.json`, {
                    Name: this.Name,
                    About: this.About,
                })
                .then((response) => {
                    this.isSuccess = true;
                    console.log(response);
                    this.Name = ''
                    this.About = ''
                    this.$emit('postcreated');
                });
        },
    },
};
</script>
