<template>
   <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Crear tipo</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="actualizar">

                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="type.name">
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
        name: "editar-tipo",
        data() {
            return {
                type: {
                    name:""
                }
            }
        },
        mounted() {
            this.mostrarTipo();
        },
        methods: {
            async mostrarTipo() {
                 await this.axios.get(`/api/type/${this.$route.params.id}`)
                    .then(response => {
                        const {name} = response.data;
                        this.type.name = name;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            async actualizar() {
                await this.axios.put(`/api/type/${this.$route.params.id}`,this.type)
                .then(response => {
                    this.$router.push('/type')
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>