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

        }       

    },    
    created(){
        
    }

})