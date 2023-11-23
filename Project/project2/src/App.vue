<template>
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="mt-2">
                <select-component data-status="1" id="selectbox" @change="selectChange"></select-component>
            </div>
            <a href="" @click.prevent="ChangeTitle()">click to change title</a>
            <h2>Posts</h2>
            <div v-for="post in posts" :key="post.title">
                <Single-Post :data="post" :isactive="1" @titlechanged="onTitlechanged"> </Single-Post>
            </div>
            <hr />

        </div>

        <div class="col-md-4">
            <h3>Latest Post</h3>
            <ul class="List-group">
                <li class="List-group-item" v-for="post in posts" :key="post.title">{{ post.title }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import SelectComponent from './components/SelectComponent.vue';
export default {
    name: 'App',
    components: {
        // local declaration of components
        // here
        SelectComponent,
    },
    data() {
        return {
            posts: [{
                    title: 'New Post 1',
                    description: 'Post Description1',
                },
                {
                    title: 'New Post 2',
                    description: 'Post Description 2',
                }
            ]
        };
    },
    methods: {
        onTitlechanged(event) {
            // console.log(event);
            let index = this.posts.findIndex(post => post.id = event.id);
            this.posts[index].title === event.title;
        },
        ChangeTitle() {
            this.posts[0].title = 'changed title from parent';
        },
        selectChange(event) {
            console.log(event.target.value);
        }
    }
}
</script>

<style>

</style>
