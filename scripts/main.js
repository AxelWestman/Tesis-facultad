var navbar = document.getElementById('lista-paginas');
let shirts = document.getElementById('shirts');
let black = document.getElementById('span_one');
let white = document.getElementById('span_two');
let heart_one = document.getElementById('heart_one');
let heart_two = document.getElementById('heart_two');
let heart_three = document.getElementById('heart_three');
let heart_four = document.getElementById('heart_four');
let retweet_one = document.getElementById('retweet_one');
let retweet_two = document.getElementById('retweet_two');
let retweet_three = document.getElementById('retweet_three');
let retweet_four = document.getElementById('retweet_four');


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

function changeHeartColorOne(){
    if(heart_one.style.color === "white"){
        heart_one.style.color = "red";
    } else{
        heart_one.style.color = "white";
    }
}

function changeRetweetColorOne(){
    if(retweet_one.style.color === "white"){
        retweet_one.style.color = "green";
    } else{
        retweet_one.style.color = "white";
    }
}

function changeHeartColorTwo(){
    if(heart_two.style.color === "white"){
        heart_two.style.color = "red";
    } else{
        heart_two.style.color = "white";
    }
}

function changeRetweetColorTwo(){
    if(retweet_two.style.color === "white"){
        retweet_two.style.color = "green";
    } else{
        retweet_two.style.color = "white";
    }
}

function changeHeartColorThree(){
    if(heart_three.style.color === "white"){
        heart_three.style.color = "red";
    } else{
        heart_three.style.color = "white";
    }
}

function changeRetweetColorThree(){
    if(retweet_three.style.color === "white"){
        retweet_three.style.color = "green";
    } else{
        retweet_three.style.color = "white";
    }
}

function changeHeartColorFour(){
    if(heart_four.style.color === "white"){
        heart_four.style.color = "red";
    } else{
        heart_four.style.color = "white";
    }
}

function changeRetweetColorFour(){
    if(retweet_four.style.color === "white"){
        retweet_four.style.color = "green";
    } else{
        retweet_four.style.color = "white";
    }
}