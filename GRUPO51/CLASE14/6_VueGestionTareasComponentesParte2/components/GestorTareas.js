Vue.component("GestorTareas",{
    props: ['tareas'],
    template://html
    `
        <div>
            

            <!-- seccion Mostrar Tareas -->                  
            <section>

                <div class="row alert alert-light text-center align-items-center" role="alert">
                    <div class= "col-12 col-md-4">
                        Nombre de la Tarea 
                    </div>

                    <div class= "col-12 col-md-4">
                        Estado de la tarea
                    </div>

                    <div class= "col-12 col-md-4">
                        Accion
                    </div>                    
                    
                </div> 

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

                <!-- <div class="row alert alert-success text-center align-items-center" role="alert">
                    <div class= "col-12 col-md-4">
                        Nombre de la Tarea 
                    </div>

                    <div class= "col-12 col-md-4">
                        Estado de la tarea
                    </div>

                    <div class= "col-12 col-md-4">
                        <button class = "btn btn-light">Cambiar Estado</button>
                        <button class = "btn btn-dark">Eliminar Tarea</button>
                    </div>                    
                    
                </div> -->



            </section>
    
        </div>
    `,
    data(){//data se convierte en una funcion que devuelve el objeto
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

    }, created(){
        let tareasVue = JSON.parse(localStorage.getItem("tareasVue"));
        console.log(tareasVue)

        if(tareasVue !== null){
            this.tareas = tareasVue;
        }else{
            this.tareas = []
        }
    }

})


