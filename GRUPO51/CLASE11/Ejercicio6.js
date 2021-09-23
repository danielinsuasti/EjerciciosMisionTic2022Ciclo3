let obtenerTexto = () => {
    //Obtener los elemento del Dom
    
    
    let buscarBtn= document.getElementById("buscarBtn");


    //Evento de escucha
    buscarBtn.addEventListener( 'click', (e) =>{

        //Cancelar comportamiento por defecto

        e.preventDefault()
        // Obtenemos el objeto input para acceder a las propiedades    
        let textoBuscar= document.getElementById("textoBuscar");

        if(textoBuscar.value){
            console.log(e)

            // Ejecutamos una funcion fetch para hacer la consulta a la api
            consultaApi(textoBuscar.value)
        }else{
            alert("Realize una busqueda adecuada")
        }      


    })
}

obtenerTexto();

consultaApi = async data =>{

    let urlApi = `http://www.omdbapi.com/?apikey=23daade9&t=${data}&plot=full&type=movie`

    try {
        let responseText = await fetch(urlApi, {method: 'GET'});
        console.log(responseText);
        let responseJson = await responseText.json();
        console.log(responseJson);
        mostrarPelicula(responseJson);
        
    } catch (error) {
        
    }

}



const mostrarPelicula = (matrix) =>{

    // console.log(matrix)

    //Mostrar elementos en el DOM
   //2. Crear los elementos en html y acceder a sus atributos para modificar el html
    let tituloPelicula = document.getElementById("tituloPelicula");
    let imagenPelicula = document.getElementById("imagenPelicula");
    let plotPelicula = document.getElementById("plotPelicula");
    let actoresPelicula = document.getElementById("actoresPelicula");
    let fechaPelicula = document.getElementById("fechaPelicula");
    let enlacePelicula = document.getElementById("enlacePelicula");


    tituloPelicula.innerText = matrix.Title;
    
    imagenPelicula.src = matrix.Poster;
    imagenPelicula.alt = "Poster Pelicula The Matrix";
    plotPelicula.innerText = matrix.Plot;
    
    actoresPelicula.innerText = matrix.Actors;
    
    fechaPelicula.innerText = matrix.Year;
    
    enlacePelicula.innerText = "Sitio Oficial IMDB";
    enlacePelicula.href = `https://www.imdb.com/title/${matrix.imdbID}`;
    enlacePelicula.target = "_blank";

}