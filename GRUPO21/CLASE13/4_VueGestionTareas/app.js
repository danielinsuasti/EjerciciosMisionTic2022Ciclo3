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
            
        }
         
    },    
    created(){

    },
})