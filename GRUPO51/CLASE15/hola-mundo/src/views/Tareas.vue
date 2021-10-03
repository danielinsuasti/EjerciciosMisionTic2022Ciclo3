<template>
    <div>
        <h1>{{ titulo }}</h1>

        <encabezado-tareas></encabezado-tareas>


    </div>
              
</template>



<script>

import EncabezadoTareas from '@/components/EncabezadoTareas.vue';
// import EncabezadoTareas from '../components/EncabezadoTareas.vue';

export default {
    components: {
        EncabezadoTareas
        // EncabezadoTareas
    },
    data() {
        return{
            proyecto : "Gestion de Tareas con VUE CLI",
            grupo : "Grupo 51"

        }
    },
    computed:{
        titulo(){
            return this.proyecto + " " + "-" + " " + this.grupo;
        }
    }
}
</script>