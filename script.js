
function togglemode() {
 const html = document.documentElement

 html.classList.toggle("light")

 const img = document.querySelector("#profile img")

 if(html.classList.contains('light')) {

    img.setAttribute('src', './assets/avatar-light.svg')

 } else {
    img.setAttribute('src', './assets/avatar(1).svg')

 }
}