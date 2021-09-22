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

    try {
        
    } catch (error) {
        
    }
}