

let obtenerTexto = () => {

    // Obtenemos los elementos del DOM
    let buscarBtn = document.getElementById("buscarBtn");
    
    

    buscarBtn.addEventListener('click', (e) =>{

        //Cancelar comportamiento por defecto

        e.preventDefault();
        //Obtenemos elemento del campo de texto
        let textoBuscar = document.getElementById("textoBuscar"); 
        
        //Validacion si en el campo de texto hay un valor
        if(textoBuscar.value){
            console.log(e);
            consultarApi(textoBuscar.value);
        }else{
            alert('Utilice una busqueda adecuada');
        }
        
    })

}

obtenerTexto();


consultarApi = async  data =>{
    let urlApi = `http://www.omdbapi.com/?apikey=f2053ecf&t=${data}&plot=full&type=movie`

    try {
        let responseText =  await fetch(urlApi, {method : 'GET'});
        console.log(responseText);
        let responseTextJson = await responseText.json();
        console.log(responseTextJson)
        mostrarPelicula(responseTextJson);

        
    } catch (error) {
        
    }

}





const mostrarPelicula = (matrix) =>{


    //CAMINO 2 ---> Crear los elementos en html y acceder a sus atributos para modificar el html

    let tituloPelicula = document.getElementById("tituloPelicula");
    let imagenPelicula = document.getElementById("imagenPelicula");
    let plotPelicula = document.getElementById("plotPelicula");
    let actoresPelicula = document.getElementById("actoresPelicula");
    let fechaPelicula = document.getElementById("fechaPelicula");
    let enlacePelicula = document.getElementById("enlacePelicula");
    
       
    tituloPelicula.innerHTML = matrix.Title;  

    imagenPelicula.src = matrix.Poster;
    plotPelicula.innerText = matrix.Plot;
    actoresPelicula.innerText = matrix.Actors;
    fechaPelicula.innerText = `${matrix.Year}`;
    enlacePelicula.href = `https://www.imdb.com/title/${matrix.imdbID}`;
    enlacePelicula.innerText = "Sitio Web Oficial IMDB";
    enlacePelicula.target = "_blank";

}

