const secondHand= document.querySelector(".second-hand")
const minsHand= document.querySelector(".min-hand")
const hourHand= document.querySelector(".hour-hand")




function setearTiempo(){
const ahora= new Date();

//Setear Segundos
const segundos= ahora.getSeconds();
const segundosGrados= ((segundos / 60) * 360) + 90;
secondHand.style.transform = `rotate(${segundosGrados}deg)`;

//Setear Minutos

const minutos= ahora.getMinutes();
const minutosGrados= ((minutos / 60) * 360) + 90;
minsHand.style.transform = `rotate(${minutosGrados}deg)`;

//Setear Hora

const horas= ahora.getHours();
const horaGrados= ((horas / 12)* 360) + 90;
hourHand.style.transform = `rotate(${horaGrados}deg)`;



}

//Cada cuánto se ejecuta la función

setInterval(setearTiempo, 1000)