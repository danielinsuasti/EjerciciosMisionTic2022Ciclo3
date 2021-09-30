Vue.component("GestorTareas",{
    props: ['tareas'],
    template://html
     `
    <div>
            

            <!-- Seccion para Motrar Tareas -->
            <div class="row alert alert-light text-center align-items-center" role="alert">
                <div class="col-12 col-md-4">
                    Tarea
                </div>

                <div class="col-12 col-md-4">
                    Estado
                </div>

                <div class="col-12 col-md-4">
                    Accion
                </div>
            </div>

            <section>
            <div v-for="(item, index) in tareas" :key="index"  :class="['row', 'alert', 'text-center', 'align-items-center', item.estado? 'alert-success' : 'alert-warning']" role="alert">
                <div class="col-12 col-md-4">
                     {{ item.nombre }}
                </div>
                <div class="col-12 col-md-4">
                    Estado:
                    <span v-if = "item.estado">
                        Terminada
                    </span> 

                    <span v-else>
                        Pendiente
                    </span>
                    
                </div>

                <div class="col-12 col-md-4">
                    <button @click = "cambiarEstado(index)" class="btn btn-light">Cambiar Estado</button>
                    <button @click = "eliminarTarea(index)" class="btn btn-dark">Eliminar</button>
                </div>
            </div>

            </section>

     </div>

    `,
    data(){ //data se convierte en una funcion que devuelve el objeto
        return{
            
        }

    },
    methods :{
        
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas))

        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
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
});

