<template>
<div>
    <h3>Create Post page!</h3>
    <form @submit.prevent="onCreatePost()">
        <div class="form-group">
            <lable>Title</lable>
            <input class="form-control" type="text" v-modal="title" />
        </div>
        <div class="form-group">
            <lable>Description</lable>
            <textarea class="form-control" v-modal="descripton"></textarea>
        </div>
        <div>
            <button type="submit" class="btn btn-primary">Create Post</button>
        </div>
    </form>
</div>
</template>

<script>
import Axios from 'axios'
export default {
    name: 'create-post',
    data() {
        return {
            title: '',
            descripton: '',
        };
    },
    methods: {
        onCreatePost() {
            Axios.post(`https://vue-https-f0439-default-rtdb.firebaseio.com/Posts.json`,{
                title: this.title,
                descripton: this.descripton
            })
            .then((response) => {
                console.log(response);
                this.$router.push('./Posts');
            })
            
        }
    }
};
</script>
