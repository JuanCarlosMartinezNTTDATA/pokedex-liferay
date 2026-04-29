let pokedexLoading = document.getElementById("pokedex-loading");
let pokedexCard = document.getElementById("pokedex-card");
let pokedexPagination = document.getElementById("pokedex-pagination");
let pokedexError = document.getElementById("pokedex-error");
let pokedexDetail = document.getElementById("pokedex-detail");
let paginaActual = 1;
const limit = 10;
let botonAnterior = document.getElementById("anterior");
let botonSiguiente = document.getElementById("siguiente");

function cargarPokemons(pagina) {

let offset = (pagina-1) * limit;
let url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset;

pokedexLoading.style.display = "block";
pokedexCard.style.display = "none";
pokedexError.style.display = "none";
pokedexPagination.style.display = "none";

    fetch(url)
      .then(response => response.json())
      .then(data => {
      pokedexLoading.style.display= "none";
      pokedexCard.style.display= "block";
      pokedexCard.innerHTML="";

      data.results.forEach(function(pokemon) {
        let id = pokemon.url.split("/")[6];
        let card = document.createElement("div");
        card.innerHTML = "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png'>" + "<h5>Nombre:" + pokemon.name + "</h5>" + "<h5>ID:" + id + "</h5>";

        card.onclick = function(){
            verDetalle(id);
        }
        pokedexCard.appendChild(card);
      });

      pokedexPagination.style.display="block";
      console.log(data);

      let totalPaginas = Math.ceil(data.count/limit);
      if (paginaActual >= totalPaginas){
        botonAnterior.disabled=true;
      } else {
        botonSiguiente.disabled=false;
      }

      })
      .catch(error => {
      pokedexLoading.style.display="none";
      pokedexError.style.display="block";
      console.log(error);
      });

}

function verDetalle(id) {
    pokedexCard.style.display = "none";
    pokedexPagination.style.display = "none";
    pokedexLoading.style.display = "block";
    pokedexDetail.style.display = "none";

    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then(response => response.json())
    .then(data => {
        pokedexLoading.style.display = "none";

        let tipos="";
        for (let i=0; i < data.types.length; i++){
            tipos += data.types[i].type.name;
            if (i<data.types.length - 1){
                tipos += ", ";
            }
        }

        document.getElementById("detail-content").innerHTML = "<h3>" + data.name + "</h3>" + "<img src='" + data.sprites.front_default + "'>" +
            "<h5>ID: " + data.id + "</h5>" + "<h5>Tipo: " + tipos + "</h5>" + "<h5>Altura: " + data.height + "</h5>" + "<h5>Peso: " + data.weight + "</h5>"

        pokedexDetail.style.display = "block";
    })
    .catch(error => {
        pokedexLoading.style.display="none";
        pokedexError.style.display="block";
        console.log(error);
    });
}

botonAnterior.addEventListener("click",function(){
    console.log(paginaActual);
    if (paginaActual <= 1){
        return;
    }
    paginaActual--;
    cargarPokemons(paginaActual);
});

botonSiguiente.addEventListener("click",function(){
    console.log(paginaActual);
    paginaActual++;
    cargarPokemons(paginaActual);
});

document.getElementById("volver").addEventListener("click",function(){
    pokedexDetail.style.display="none";
    pokedexCard.style.display="block";
    pokedexPagination.style.display="block";
});

document.getElementById("error").addEventListener("click",function(){
    pokedexError.style.display="none";
    cargarPokemons(paginaActual);
});

cargarPokemons(paginaActual);