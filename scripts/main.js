var navbar = document.getElementById('lista-paginas');
var message = "Hola Mundo";
console.log(message);
function openNav() {
    if (navbar.style.display == 'none') {
        navbar.style.display = 'block';
    }
    else if (navbar.style.display == 'block') {
        navbar.classList.add("animate__slideInDown");
        navbar.classList.toggle("animate__slideOutUp");
    }
    else {
        navbar.style.display = "none";
    }
}
