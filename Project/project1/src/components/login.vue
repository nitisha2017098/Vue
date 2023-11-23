<template>
<div>
    <h2>Welcome To Voip Admin Panel</h2>
    <hr />
    <h4>Please Sign-in to your account</h4>

    <div class="alert alert-success" v-if="isSuccess">
        Logged in Successfully
    </div>
    <form @submit.prevent="loginpage">
        <div class="form-group">
            <label>username</label>
            <input type="text" class="form-control" v-model="username" />
        </div>
        <div class="form-group">
            <label>password</label>
            <textarea type="password" class="form-control" v-model="password"></textarea>
        </div>

        <div class="mt-3">
            <button type="submit" class="btn btn-primary">
                sign-in
            </button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'My-Login',
    data() {
        return {
            data: {
                username: '',
                password: '',
            },
            entereddata: '',
            
        };
    },
    methods: {
        loginpage() {
           
        }
    },

}
</script>

<style>
button {
    color: chartreuse;
}
</style>
