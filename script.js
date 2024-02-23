function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // o toogle substitui a condicional if que adiciona ou remove a classe 'light' do html

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/assets/foto-light.jpeg')
    img.setAttribute('alt', "Foto preto e branca da Ana Beatriz")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/assets/foto.jpeg")
    img.setAttribute('alt', "Foto colorida da Ana Beatriz")
  }
}
