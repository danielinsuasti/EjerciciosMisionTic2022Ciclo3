var app = new Vue({
    el: "#app",
    data :{ 
        titulo :  "Administrador de Tareas con Vue, Grupo 51",
        nuevaTarea : "",
        tareas: []     
    },
    methods :{
        agregarTareas(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = "";
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );
            //  console.log(this.tareas);

        },
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );

        },
        eliminarTarea(index){
            this.tareas.splice(index,1);
            localStorage.setItem("tareasVue", JSON.stringify(this.tareas ) );
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

})