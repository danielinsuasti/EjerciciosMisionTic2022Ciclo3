
var app = new Vue({
    el: '#app',
    data : {
        mensaje : "Hola Estudiantes"
    }
})

//app.mensaje = "NUEVO MENSAJE, CAMBIA DE FORMA REACTIVA"

var app2 = new Vue({
    el: '#app-2', 
    data :{
        mensaje: "Ud cargo la pagina el " + new Date().toLocaleString()  
    }


})

var app3 = new Vue({
    el: '#app-3', 
    data :{
        seen : true 
    }
})



var app4 = new Vue({
    el: '#app-4', 
    data :{
        todos:[
            {text : 'Aprender JavaScript'},
            {text : 'Aprender Vue'},
            {text : 'Hacer algo genial!'}
        ]
    }
})


var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'eSTUDIANTES GRUPO 51!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })



  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hola Vue!'
    }
  })
