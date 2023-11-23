<!-- <template>
<div>
    <h1>Form Component</h1>
</div>
<div>
    <form @submit.prevent="handleSubmit">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.employee_name" placeholder="Employee name" required>
        <br /><br />
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="formData.employee_age" placeholder="Employee age" required>
        <br /><br />
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="formData.employee_salary" placeholder="Employee salary" required>
        <br /><br />
        <button type="submit">{{ submitButtonText }}</button>
    </form>
</div>
</template> -->
<template>
    <div class="form-container">
        <h1>Employee Form</h1>
        <div>
            <form @submit.prevent="handleSubmit" class="employee-form">
                <label for="name">Name:</label>
                <input type="text" id="name" class="form-control" v-model="formData.employee_name" placeholder="Employee name" required>
                
                <label for="age">Age:</label>
                <input type="number" id="age" class="form-control" v-model="formData.employee_age" placeholder="Employee age" required>
                
                <label for="salary">Salary:</label>
                <input type="number" id="salary" class="form-control" v-model="formData.employee_salary" placeholder="Employee salary" required>
                
                <button type="submit">{{ submitButtonText }}</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'My-Form',
    data() {
        return {
            formData: {
                employee_name: '',
                employee_age: '',
                employee_salary: ''
            }
        };
    },
    computed: {
        submitButtonText() {
            return this.$route.params.id ? 'Update' : 'Submit';

        }
    },
    created() {
        this.editEmployeeData(this.$route.params.id)
    },
    methods: {
        handleSubmit() {
            if (this.$route.params.id) {
                this.formData['id'] = this.$route.params.id;
                this.updateEmployeeData(this.formData)
                // window.alert('Employee data updated successfully!');
            } else {

                this.$store.dispatch('saveEmployeeData', this.formData);
                window.alert('Form submitted successfully!');
                this.$router.push({
                    name: 'Employee'
                });
            }
        },

        editEmployeeData(id) {
            this.$store.dispatch('editEmployeeData', id).then((res) => {
                console.log(res.data)
                this.formData = res.data;
            })
        },

        updateEmployeeData(data) {
            this.$store.dispatch('updateEmployeeData', data)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        window.alert('Employee data updated successfully!');
                    }
                    this.$router.push({
                        name: 'Employee'
                    });
                })
                .catch((error) => {
                    console.error('Error updating employee data:', error);
                });
        },
    },
};
</script>

  
<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.employee-form {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
