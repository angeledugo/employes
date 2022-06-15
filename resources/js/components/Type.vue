<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <router-link :to='{name:"typeCreate"}' class="btn btn-success" ><i class="fa fa-plus-circle"></i></router-link>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="bg-primary text-white">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="type in types" :key="type.id">
                                <td>{{ type.id }}</td>
                                <td>{{ type.name }}</td>
                                <td>
                                    <router-link :to='{name:"typeEdit",params:{id:type.id}}'><i class="far fa-edit"></i></router-link>
                                    <a type="button" @click="borrarTipo(type.id)" class="btn btn-danger"><i class="far fa-trash"></i></a>
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
        name:"types",
        data() {
            return {
                types:[]
            }
        },
        mounted() {
            this.mostrarTipos()
        },
        methods: {
            async mostrarTipos() {
                await this.axios.get('/api/type')
                    .then(response => {
                        this.types = response.data
                    })
                    .catch(error => {
                        this.types = []
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