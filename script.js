function toggleMode() {
    const html = document.documentElement 
    html.classList.toggle('light') //em html, na sua lista de classe...
    //document = todo documento html
    //documentElement = html

    const img = document.querySelector('#profile img')
    if(html.classList.contains('light')) {
         html.setAttribute('src', '') // Na segunda aspa é o caminho da img no light
    }else{
        html.setAttribute('src', '') //Mantém a imagem anterior
    }
}

