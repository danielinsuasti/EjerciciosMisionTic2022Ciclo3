

const mostrarMatrix = () =>{

    const matrix = {
        "Title": "The Matrix",
        "Year": "1999",
        "Rated": "R",
        "Released": "31 Mar 1999",
        "Runtime": "136 min",
        "Genre": "Action, Sci-Fi",
        "Director": "Lana Wachowski, Lilly Wachowski",
        "Writer": "Lilly Wachowski, Lana Wachowski",
        "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        "Plot": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.",
        "Language": "English",
        "Country": "United States, Australia",
        "Awards": "Won 4 Oscars. 42 wins & 51 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.7/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "88%"
            },
            {
                "Source": "Metacritic",
                "Value": "73/100"
            }
        ],
        "Metascore": "73",
        "imdbRating": "8.7",
        "imdbVotes": "1,748,071",
        "imdbID": "tt0133093",
        "Type": "movie",
        "DVD": "15 May 2007",
        "BoxOffice": "$171,479,930",
        "Production": "Village Roadshow Prod., Silver Pictures",
        "Website": "N/A",
        "Response": "True"
    }

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

mostrarMatrix()