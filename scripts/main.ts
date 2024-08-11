let navbar: HTMLElement = document.getElementById('lista-paginas') as HTMLElement;
let shirts: HTMLElement = document.getElementById('shirts') as HTMLElement;
let black: HTMLElement = document.getElementById('span_one') as HTMLElement;
let white: HTMLElement = document.getElementById('span_two') as HTMLElement;

const message: string = "Hola Mundo";
console.log(message);

function openNav() {
    if (navbar.style.display == 'none'){
        navbar.style.display = 'block';
    }
    else if(navbar.style.display == 'block'){
        navbar.classList.add("animate__slideInDown");
        navbar.classList.toggle("animate__slideOutUp");
    }
    else{
        navbar.style.display = "none"; 
    }
}

function changeShirtColor(){
    shirts.src="../images/merch/remera-2.png";
}

function changeShirtColorTwo(){
    shirts.src="../images/merch/remera-1.png";
}

