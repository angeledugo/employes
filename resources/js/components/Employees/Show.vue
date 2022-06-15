<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link :to='{name:"employeeCreate"}' class="btn btn-success" ><i class="fa fa-plus-circle"></i></router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Tipo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in employees" :key="employee.id">
                                <td>{{ employee.id }}</td>
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.phone }}</td>
                                <td>{{ employee.address }}</td>
                                <td>{{ employee.tipo }}</td>
                                <td>
                                    <router-link :to='{name:"typeEdit",params:{id:employee.id}}' class="btn btn-primary"><i class="fa fa-edit"></i></router-link>
                                    <a type="button" @click="borrarTipo(employee.id)" class="btn btn-danger"><i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"employee",
        data() {
            return {
                employees:[]
            }
        },
        mounted() {
            this.mostrarEmployees()
        },
        methods: {
            async mostrarEmployees() {
                await this.axios.get('/api/employee')
                    .then(response => {
                        this.employees = response.data
                    })
                    .catch(error => {
                        this.employees = []
                    })
            },
            borrarTipo(id) {
                if(confirm("¿ desea eliminar un registro ?")) {
                    this.axios.delete('/api/type/${id}')
                    .then(response => {
                        this.mostrarTipos()
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
            }

        },
    }
</script>