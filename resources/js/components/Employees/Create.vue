<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Crear tipo</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="crear">

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="employee.name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Telefono</label>
                                    <input type="text" class="form-control" v-model="employee.phone">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Direccion</label>
                                    <input type="text" class="form-control" v-model="employee.address">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Tipo</label>
                                    <select class="form-control" v-model="employee.type_id">
                                        <option >Seleccione</option>
                                        <option  v-for="type in types"  :value="type.id" >{{type.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "crear-employee",
        data() {
            return {
                employee: {
                    name: "",
                    phone: "",
                    address: "",
                    type_id:""
                },
                types: []
            }
        },
        mounted() {
            this.tiposEmpleados()
        },
        
        methods: {
            async crear() {
                await this.axios.post('/api/employee',this.employee)
                    .then(response => {
                        this.$router.push('/employee')
                    })
                    .catch(error => {
                        this.employee = []
                    })
            },
            async tiposEmpleados() {
                await this.axios.get('/api/type')
                .then(response => {
                    this.types = response.data
                })
                .catch(error => {
                    this.types = []
                })
            },
        }

    }

</script>
