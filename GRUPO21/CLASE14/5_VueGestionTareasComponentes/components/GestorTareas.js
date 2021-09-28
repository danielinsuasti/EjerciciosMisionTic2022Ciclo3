Vue.component("GestorTareas",{
    template: `
    <div>
            <!-- Seccion para buscar Tareas -->
            <section id = "buscador-section">
                <form>
                    <div class="mb-3">
                    <label for="textoBuscar" class="form-label">Adicionar Tarea</label>
                    <input type="text" class="form-control" v-model="nuevaTarea" aria-describedby="emailHelp" required>
                    <div id="emailHelp" class="form-text">Escriba la tarea a agregar.</div>
                    </div>
                    
                    
                    <button @click ="agregarTareas" v-bind:disabled = "nuevaTarea? false : true"  type="button" class="btn btn-outline-primary w-100">Crear Tarea</button>
                </form>

            </section>

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
            nuevaTarea :"",
            tareas : []  
        }

    },
    methods :{
        agregarTareas(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false

            });
            this.nuevaTarea = "";
            //console.log(this.tareas);
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas))
        },
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

