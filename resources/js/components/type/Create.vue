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
        name: "crear-tipo",
        data() {
            return {
                type: {
                    name: ""
                }
            }
        },
        methods: {
            async crear() {
                await this.axios.post('/api/type',this.type)
                    .then(response => {
                        this.$router.push('/type')
                    })
                    .catch(error => {
                        this.types = []
                    })
            }
        }

    }

</script>
