var app = new Vue({
    el: "#app",
    data :{
        message : "MENSAJE DESDE VUE",
        message2: "Caso v-bind",
        claseH1 : "estiloAlerta",
        mostrarTexto : true,
        contenidoCard : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis mollitia eligendi corporis eaque recusandae quod cum quae consectetur dignissimos, error, dolor soluta qui officiis beatae, commodi delectus. Unde, quos cupiditate?",
        tareas : [
            { text : "Repasar Clases pasadas", estado : true},
            { text : "Revisar Retos", estado : true},
            { text : "Hacer Examenes", estado : false},
            { text : "Actividades Sprint", estado : true}

        ],
        otroDato : "",
        pelicula : "",
        peliculas : []

    },
    methods :{
        reverseMessage(){
            this.message= this.message.split('').reverse().join("")
        },
        searchMovie: async function(){
            const responseText = await fetch(`http://www.omdbapi.com/?apikey=23daade9&t=${this.pelicula}&plot=full&type=movie`, {method: 'GET'})
            const responseJson = await responseText.json()
            this.peliculas.push(responseJson)
            // this.peliculas=[{
            //     titulo : responseJson.titulo,
            //     descripcion : responseJson.descripcion,
            //     poster : responseJson.poster 
            // }]

            console.log(this.peliculas)
        }


    }

})