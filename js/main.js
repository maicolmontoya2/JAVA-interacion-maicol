function encender() {
    var bombilla = document.getElementById('foco');
    bombilla.src='img/pic_bulbon.gif'; 
}

function apagar() {
   var bombilla =document.getElementById('foco');
   bombilla.src='img/pic_bulboff.gif';
}

function ocultar(){
    var bombilla = document.getElementById('foco');
    bombilla.style.display='none';
}
function mostrar(){
    var bombilla = document.getElementById('foco');
    bombilla.style.display='';
}

function cambiarFondo() {
    var selector = document.getElementById('body');
    selector.style.backgroundColor="pink";
}

function seleccionar() {
    var color = prompt("Ingrese un color en ingles");
    var selector = document.getElementById('body');
    selector.style.backgroundColor=color;

}

function cambiarSize() {
    var selector = document.getElementById('foco');
    selector.style.cssText="transition: 2s;background-color:black; width: 400px"
}
function circulo() {
    var figura = document.getElementById('figura');
    figura.classList.add("circulo")

}
function rombo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("rombo");
}
function arriba(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("top");
}
function izquierda(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Left");
}

function abajo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Butom");
}
function triangulo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("triangulo");
}

function derecha(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("Right")
}

function diagonaliz(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("DiagonalIzSup")
}
function diagonalde(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("DiagonalDeInf")
}
function mostrargif() {
    document.getElementById('gif').style.display='block';

}
function trapecio(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("trapecio")
}
function huevo(){
    var figura = document.getElementById('figura')
    figura.classList.toggle("huevo")
}
