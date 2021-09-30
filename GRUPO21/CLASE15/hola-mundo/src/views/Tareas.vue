<template>
    <div>
        <h1> {{ titulo }} </h1>

        <encabezado-tareas></encabezado-tareas>
        
    </div>
</template>

<script>
//import EncabezadoTareas from '../components/EncabezadoTareas.vue';

//Importar el componente Encabezado Tareas
import EncabezadoTareas from '@/components/EncabezadoTareas.vue';

export default {
  //components: { EncabezadoTareas },
    components: { 
        EncabezadoTareas
    },

    data() {
        return{
            proyecto : "Gestion de tareas con Vue CLI",
            grupo : "Grupo 21"

        }

    },
    computed:{
        titulo(){
            return this.proyecto + " " + "-" + " " + this.grupo; 
        }
    }
    
}
</script>

<style scoped>




</style>