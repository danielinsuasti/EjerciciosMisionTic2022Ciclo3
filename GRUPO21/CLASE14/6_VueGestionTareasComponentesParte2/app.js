


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
        }             
    },    
    created(){// Para cargar datos que se cargan en nuestra pagina web desde una API, al ser inicializada
        
        

    },
})