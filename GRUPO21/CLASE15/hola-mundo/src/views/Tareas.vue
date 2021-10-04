<template>
    <div class = "container">
        <h1> {{ titulo }} </h1>

        <!-- Seccion para Agregar Tareas -->
            <section id = "buscador-section">
                <form @submit.prevent="agregarTareas">
                    <div class="mb-3">
                    <label for="textoBuscar" class="form-label">Adicionar Tarea</label>
                    <input type="text" class="form-control" v-model="nuevaTarea" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">Escriba la tarea a agregar.</div>
                    </div>
                    
                    
                    <button @click ="agregarTareas" v-bind:disabled = "nuevaTarea? false : true"  type="button" class="btn btn-outline-primary w-100">Crear Tarea</button>
                </form>

            </section>

        <encabezado-tareas></encabezado-tareas>

        <gestor-tareas v-bind:tareas="tareas"></gestor-tareas>
        
    </div>
</template>

<script>
//import EncabezadoTareas from '../components/EncabezadoTareas.vue';

//Importar el componente Encabezado Tareas
import EncabezadoTareas from '@/components/EncabezadoTareas.vue';
import GestorTareas from '../components/GestorTareas.vue';

export default {
  //components: { EncabezadoTareas },
    components: { 
        EncabezadoTareas,
        GestorTareas
    },

    data(){
        return{
            proyecto : "Gestion de tareas con Vue CLI",
            grupo : "Grupo 21",
            nuevaTarea :"",
            tareas : []  

        }

    },
    computed:{
        titulo(){
            return this.proyecto + " " + "-" + " " + this.grupo; 
        }
    }, methods: {
        agregarTareas(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            this.nuevaTarea = "";
            //console.log(this.tareas);
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas))
        }   
    },
    created(){
        let tareasVue = JSON.parse(localStorage.getItem('tareasVue'));
        console.log(tareasVue)

        //Crear Validacion para cuando se cargan en nustra pagina webe desde una API al ser inicializada
        if(tareasVue !== null){
            this.tareas = tareasVue;
        }else{
            this.tareas = []
        }
        
    }

    
}
</script>

<style scoped>




</style>