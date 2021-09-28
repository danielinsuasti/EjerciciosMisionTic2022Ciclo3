var app = new Vue({
    el : "#app",
    data: {
        titulo: "Administrador de Tareas con VUE, Grupo 21",
        nuevaTarea :"",
        tareas : []        

    },
    methods : {
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
    created(){// Para cargar datos que se cargan en nuestra pagina web desde una API, al ser inicializada
        let tareasVue = JSON.parse(localStorage.getItem('tareasVue'));
        console.log(tareasVue)

        //Crear Validacion para cuando se cargan en nustra pagina webe desde una API al ser inicializada
        if(tareasVue !== null){
            this.tareas = tareasVue;
        }else{
            this.tareas = []
        }
        

    },
})