const botao = document.getElementById("cmdMenu");
const nav = document.getElementsByClassName("nav");

botao.addEventListener("click", abrirMenu);

function abrirMenu(){

    nav[0].classList.toggle("active");

}