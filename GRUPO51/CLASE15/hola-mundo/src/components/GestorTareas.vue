<template>
        <!-- seccion Mostrar Tareas -->                  
        <section>
            <div v-for="(item, index) in tareas"  :key="index" :class="['row', 'alert', 'text-center', 'align-items-center', item.estado? 'alert-success' : 'alert-warning']" role="alert">
                <div class= "col-12 col-md-4">
                    {{ item.nombre }}
                </div>

                <div class= "col-12 col-md-4">
                    Estado :
                    <span v-if="item.estado"> 
                        Finalizada 
                    </span>

                    <span v-else>
                        Pendiente
                    </span>
                    
                    <!-- {{ item.estado }} -->
                </div>

                <div class= "col-12 col-md-4">
                    <button class = "btn btn-light" @click = "cambiarEstado(index)">Cambiar Estado</button>
                    <button class = "btn btn-dark" @click = "eliminarTarea(index)">Eliminar</button>
                </div>       
                
            </div>
        </section>
    
</template>

<script>
export default {
    name : 'GestorTareas',
    props:['tareas'],
    data(){
        return{

        }
    },
    methods : {
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );

        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );
        }
    }



}
</script>