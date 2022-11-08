const turnon = document.getElementById ('turnon');
const turnoff = document.getElementById ('turnoff');
const lampada = document.getElementById ('lampada'); 
var back = document.body

turnoff.addEventListener ("click", desligou);
turnon.addEventListener ('click', ligou,); 
lampada.addEventListener ('mouseover', ligou);
lampada.addEventListener ('mouseout', desligou);
lampada.addEventListener ('dblclick', quebrou);


function encerarr () {
lampada.src ('quebrou')
alert.windown.write('poxa')


}



// desligar luz
function desligou() {
lampada.src = './lampadaoff.png';
back.style.background = 'black'
}
//ligar luz
function ligou () {
back.style.background = 'yellow'
lampada.src = './lampadaon.png';

}

function quebrou () {
    back.style.background = 'black'
lampada.src = './lampadaquebrada.png'; 


}











 

//mouse passar na lampada

