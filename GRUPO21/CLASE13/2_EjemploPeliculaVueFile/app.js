var app = new Vue({
    el : "#app",
    data: {
        message: "HOLA MUNDO",
        message2: "Mensaje 2 del title",
        claseH1: "estiloAlerta",
        mostrarTexto : false,
        contenidoCard :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit officia assumenda, cumque atque eos temporibus blanditiis ipsum illum asperiores nesciunt error aperiam laborum odio dolor quasi debitis placeat. Consectetur?",
        tareas :[
            {text: "Respasar clases pasadas", estado : true},
            {text: "Revisar Retos", estado : true},
            {text: "Realizar examenes", estado : false},
            {text: "Actividades Sprint", estado : true}
        ],
        otroDato : "",
        pelicula : "",
        peliculas : []

    },
    methods : {
        reverseMessage(){
            this.message = this.message.split("").reverse().join("")
        },
        searchMovie: async function(){
            const responseText = await fetch("./data.json", {method: 'GET'})
            const responseJson = await responseText.json()
            this.peliculas.push({
                titulo : responseJson.titulo,
                descripcion : responseJson.descripcion,
                poster : responseJson.poster
            })

            // this.peliculas = [{
            //     titulo : responseJson.titulo,
            //     descripcion : responseJson.descripcion,
            //     poster : responseJson.poster                
            // }]

            console.log(this.peliculas)
            

        } 
    }
})