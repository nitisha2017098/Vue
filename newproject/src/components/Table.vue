<!-- <template>
<div>
    <div>
        <h3>Employee Details</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tr v-for="employee in EmployeeDetails" :key="employee.id">
                <td>{{ employee.name }}</td>
                <td>{{ employee.age}} </td>
                <td>{{ employee.salary}}</td>
                <td>
                    <router-link to="/table" class="btn btn-primary">Show Details</router-link>
                </td>
            </tr>
            <thead>

            </thead>
        </table>
    </div>
</div>
</template>

<script>
    import apiservice from '../Services/apiService'
    export default {
        name: 'form-table',
        data() {
            return {
                EmployeeDetails: [],
            }
        },
        mounted() {
            apiservice
                .get(`http://dummy.restapiexample.com/api/v1/employees/table.json`)
                .then((response) => {
                    this.formatPosts(response.data);
                });
        },
        methods: {
            formatPosts(Data) {
                for (let key in Data) {
                    this.EmployeeDetails.push({
                        ...Data[key],
                        id: key
                    });
                }
            }
        }
    }
</script>

<style>
    .table {
        align-items: normal;
    }
</style> -->

<template>
    <div>
      <div>
        <h3>Employee Details</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in EmployeeDetails" :key="employee.id">
              <td>{{ employee.employee_name }}</td>
              <td>{{ employee.employee_age }}</td>
              <td>{{ employee.employee_salary }}</td>
              <td>
                <!-- Assuming you want to display details for each employee -->
                <router-link :to="'/details/' + employee.id" class="btn btn-primary">
                  Show Details
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import apiService from '../Services/apiService';
  
  export default {
    name: 'form-table',
    data() {
      return {
        EmployeeDetails: [],
      };
    },
    mounted() {
      // Fetch data from the API using the service method
      apiService.getAllEmployees()
        .then((response) => {
          this.EmployeeDetails = response.data.data; // Assuming the response has a 'data' field containing the employee records
        })
        .catch(error => {
          console.error('Error fetching employees:', error);
        });
    },
  };
  </script>
  
  <style>
  .table {
    align-items: center;
  }
  </style>
  