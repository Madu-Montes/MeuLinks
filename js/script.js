function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") //verifica se há dark/light mode
  
    //if(html.classList.contains('light')) {
    //  html.classList.remove('light')
    //}
    //else {
    // html.classList.add('light')
    //}
  
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
      img.setAttribute('src', './assets/avatar-light.png')
      img.setAttribute("alt", "avatar com fundo escuro")
    } else {
      img.setAttribute('src', './assets/avatar-dark.png')
      img.setAttribute("alt", "avatar com fundo roxo")
    }
  }