<template>
    <div class = "container">
        <h1>{{ titulo }}</h1>

        <!-- seccion Agregar Tareas -->
        <section id = "buscador-section">
            <form @submit.prevent="agregarTareas">
                <div class="mb-3">
                <label for="textoBuscar" class="form-label">Adicionar Tareas</label>
                <input type="text" class="form-control" v-model="nuevaTarea" aria-describedby="emailHelp"  required >
                <div id="emailHelp" class="form-text">Escriba la tarea a agregar</div>
                </div>                  
                
                <button @click = "agregarTareas" type="button" v-bind:disabled="nuevaTarea? false : true " class="btn btn-outline-info w-100 ">Crear Tarea</button>
            </form>   
        </section>

        <encabezado-tareas></encabezado-tareas>
        <gestor-tareas v-bind:tareas="tareas" ></gestor-tareas>




    </div>
              
</template>



<script>

import EncabezadoTareas from '@/components/EncabezadoTareas.vue';
import GestorTareas from '../components/GestorTareas.vue';
// import EncabezadoTareas from '../components/EncabezadoTareas.vue';

export default {
    components: {
        EncabezadoTareas,
        GestorTareas
        // EncabezadoTareas
    },
    data() {
        return{
            proyecto : "Gestion de Tareas con VUE CLI",
            grupo : "Grupo 51",
            nuevaTarea : "",
            tareas: [] 

        }
    },
    computed:{
        titulo(){
            return this.proyecto + " " + "-" + " " + this.grupo;
        }
    },
    methods: {
        agregarTareas(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = "";
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );
            //  console.log(this.tareas);

        }       

    },
    created(){
        let tareasVue = JSON.parse(localStorage.getItem("tareasVue"));
        console.log(tareasVue)

        if(tareasVue !== null){
            this.tareas = tareasVue;
        }else{
            this.tareas = []
        }
    }
}
</script>