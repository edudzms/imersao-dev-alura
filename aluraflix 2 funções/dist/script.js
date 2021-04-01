function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
  campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
  var listarFilmes = document.querySelector('#listaFilmes')
  var elemenroFilme = "<img src=" + filme + ">"
  listarFilmes.innerHTML = listaFilmes.innerHTML + elemenroFilme
}