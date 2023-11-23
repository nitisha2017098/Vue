<!-- <template>
<div>
    <div>
        <h3>Employee Details</h3>
        <button class='btn btn-primary' @click="getEmployeeData">Refresh</button>
        <button class="btn btn-primary" @click="Add">
            Add Employee</button>
        <table class="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Employee name</td>
                    <td>Employee age</td>
                    <td>Employee Salary</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.employee_name }}</td>
                    <td>{{ employee.employee_age }}</td>
                    <td>{{ employee.employee_salary }}</td>
                    <td>{{ employee.profile_image }}</td>
                    <td>
                        <button class='btn btn-warning'>
                            <router-link :to="{name:'editEmployee',params:{id:employee.id}}">
                                Edit
                            </router-link>
                        </button>
                        <button class='btn btn-primary' @click="deleteEmployeeData(employee.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template> -->
<template>
    <div class="employee-list-container">
        <div>
            <h3>Employee Details</h3>
            <div class="button-container">
                <button class="btn btn-primary" @click="getEmployeeData">Refresh</button>
                <button class="btn btn-primary" @click="addEmployee">Add Employee</button>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Employee Age</th>
                        <th>Employee Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.id">
                        <td>{{ employee.id }}</td>
                        <td>{{ employee.employee_name }}</td>
                        <td>{{ employee.employee_age }}</td>
                        <td>{{ employee.employee_salary }}</td>
                        <td>
                            <button class="btn btn-warning">
                                <router-link :to="{ name: 'editEmployee', params: { id: employee.id } }">
                                    Edit
                                </router-link>
                            </button>
                            <button class="btn btn-danger" @click="deleteEmployeeData(employee.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employees: []
        };
    },
    created() {
        console.log('this.$store')
        this.getEmployeeData()

    },
    methods: {
        addEmployee() {
            this.$router.push({
                name: 'Form'
            });
        },
        getEmployeeData() {
            this.$store.dispatch('getEmployeeData').then((res) => {
                console.log(res)
                this.employees = res.data;
            })
        },
        deleteEmployeeData(id) {
            this.$store.dispatch('deleteEmployeeData', id).then((res) => {
                console.log(res)
                this.getEmployeeData();
                if (res.status === 200) {
                    window.alert('Employee data updated successfully!');
                }
                console.log('Employee data deleted successfully!');
            }).catch(err => {
                console.log(err)
            });
        },
    }
};
</script>

<style scoped>
.employee-list-container {
    display: flex;
    flex-direction: column;
    align-items: auto;
    justify-content: center;
    margin-top: 20px;
}

.button-container {
    margin-bottom: 20px;
}

.table-container {
    overflow-x: auto;
}

.table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.table th {
    background-color: #f2f2f2;
}

.btn {
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;
}

.btn-primary {
    background-color: #4caf50;
    color: #fff;
    border: none;
}

.btn-warning {
    background-color: #ffc107;
    color: #000;
    border: none;
}

.btn-danger {
    background-color: #dc3545;
    color: #000;
    border: none;
}

@media (max-width: 900px) {

    .table th,
    .table td {
        font-size: 14px;
    }

    .btn {
        font-size: 14px;
    }
}
</style>
