<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <!-- <div>
                <post @postcreated="onCreatePost"></post>
            </div>

            <div class="my-2">
                <post-details v-if="showPosts"></post-details>
            </div> -->

            <div class="my-2">
                <login />
            </div>               
        </div>
    </div>
</div>


</template>

<script>
// import Post from './components/Post.vue';
// import PostDetails from './components/PostDetails.vue';
import login from './components/login.vue';

export default {
    data() {
        return {
            showPosts: true,
        };
    },
    name: 'App',
    components: {
        // Post,
        // PostDetails,
        login,
    },
    methods: {
        onCreatePost() {
            this.showPosts = false;
            setTimeout(() => {
                this.showPosts = true;
            }, 50);
        },

        loginpage(){
            console.warn('login!')
        }
    },
};
</script>

<style></style>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
