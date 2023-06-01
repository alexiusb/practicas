function showAlert(){
    alert("¡Hola, esta es una alerta desde Javascript!");};

const miBoton= document.getElementById('miBoton1');
function handleClick(){
    alert ("Hola! Clickeaste mi botón :o");
};
miBoton.addEventListener('click', handleClick);
    /*boton navbar*/
document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})
