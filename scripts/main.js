var navbar = document.getElementById('lista-paginas');
let shirts = document.getElementById('shirts');
let black = document.getElementById('span_one');
let white = document.getElementById('span_two');

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

function changeShirtColor(){
    shirts.src="../images/merch/remera-2.png";
}

function changeShirtColorTwo(){
    shirts.src="../images/merch/remera-1.png";
}
