<template>
    <div :class="{ 'bgcolor-grey': isactive}" class="p-3">
        <div class="title">{{post.title}}</div>
        <div class="discription">{{post.description}}</div>
        <a href="" @click.prevent="ChangeTitle()">Click here to change title</a>
    </div>
</template>

<!-- <script>
import  post  from '../services/PostService';
export default {
    emits: {
        'title-changed': (post) => {
            if(post instanceof Post){
                return true;
            }
            console.log('Invalid post data');
            return false;
        }
    },
    props: {
        data: {
            type: Object,
            required: false,
            default: function(){
                return{ title: 'New Post', description: 'ansnddjsdj'};
            }
        },
        isactive: {
            type: Number,
            required: false,
            dafault: 1,
            validator: function(value){
                return value === 1 || value === 0;
            }
        }
    },
    data() {
        return {
            post: {...this.data},
        }
    },
    methods: {
        ChangeTitle() {
            this.post.title = 'Changed the title';
            const postData = new Post(
                this.post.id,
                this.post.title,
                this.post.description,
            );
            this.$emit('title-changed', this.postData);
        }
    }
}
</script> -->

<script>
import { Post } from '../services/PostService'; // Correct the import to match the exported class

export default {
  emits: {
    'title-changed': (post) => {
      if (post instanceof Post) {
        return true;
      }
      console.log('Invalid post data');
      return false;
    }
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: function () {
        return { title: 'New Post', description: 'ansnddjsdj' };
      }
    },
    isactive: {
      type: Number,
      required: false,
      default: 1,
      validator: function (value) {
        return value === 1 || value === 0;
      }
    }
  },
  data() {
    return {
      post: { ...this.data }
    };
  },
  methods: {
    ChangeTitle() {
      this.post.title = 'Changed the title';
      const postData = new Post( // Assuming Post is a class from 'PostService'
        this.post.id,
        this.post.title,
        this.post.description
      );
      this.$emit('title-changed', postData);
    }
  }
}
</script>

<style>
.title {
    color: rebeccapurple;
    font-weight: bold;
    font-size: medium;
    font-family: 'Segoe UI';
}
</style>
