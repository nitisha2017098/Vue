<template>
<div>
    <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
        <br/>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="form.age" required />
        <br/>
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="form.salary" required />
        <br/>
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
import Axios from 'axios';
export default {
    name: 'My-form',
    data() {
        return {
            form: {
                name: '',
                age: '',
                salary: ''
            }
        }
    },
    methods: {
        submitForm() {
            Axios.form(`form.json`, {
                name: this.name,
                age: this.age,
                salary: this.salary
            }).then((response) =>{
                console.log(response);
                this.$router.push('/table');
            })
            console.log('Form Submitted', this.form);
        }
    }
}
</script>


