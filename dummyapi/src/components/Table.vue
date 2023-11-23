

<template>
    <div>
        <div>
            <h3>Employee Details</h3>
            <button>Get Employee Data</button>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>salary</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(data, index) in formData" :key="index">
                        <td>{{ data.name }}</td>
                        <td>{{ data.age }}</td>
                        <td>{{ data.salary }}</td>
                        <td>
                            <button @click="editEmployee(employee.id)">Edit</button>
                            <button @click="deleteEmployee(employee.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import {
    dummyAPI
} from '../api';

export default {
    name: 'Data-Table',
    computed: {
        formData() {
            return this.$store.state.formData;
        },
    },
    methods: {
        deleteData(index) {
            this.$store.dispatch('deleteFormData', index);
        },
        
    },
    created() {
        const data = dummyAPI.getAllData();
        data.forEach(item => {
            this.$store.dispatch('addFormData', item);
        });
    },
};
</script>

