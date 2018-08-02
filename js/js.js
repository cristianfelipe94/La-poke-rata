let music_4_battle = document.getElementById('music_4_battle');
let start_button = document.getElementById('start_button');
let change_numbers_1 = document.getElementById('change_numbers_1');
let change_numbers_2 = document.getElementById('change_numbers_2');

let start_section = document.getElementsByClassName('start_section');

let ataque_random = ['a banana', 'a deuda', ' televisor',
'a reseña',  ' Leiva', ' comentario hiriente', ' Afedo cámate pofavo', 'a indirecta', ' rosario', 
' ecoladrillo', 'a solicitud de amistad', 
' "No gracias, es que quiero concentrarme en mis estudios pero sigamos siendo amigos"'];

start_button.addEventListener('click', start_game);

function start_game(){
  music_4_battle.play();
  start_section[0].style.setProperty('top','-100vh');
}

// button interaction
let action = document.getElementsByClassName('action');
let barra_interna = document.getElementsByClassName('barra_interna');
let name = document.getElementsByClassName('name');

let text = document.getElementById('text');

let vida_enemigo = 32;

function controlar_vida_enemigo(){
  
  //Para que la vida cambie de color
  if(vida_enemigo <= 32){
    barra_interna[0].setAttribute('class','barra_interna color_1');
  }
  if(vida_enemigo <= 20){
    barra_interna[0].setAttribute('class','barra_interna color_2');
  }
  if(vida_enemigo <= 10){
    barra_interna[0].setAttribute('class','barra_interna color_3');
  }
  
  //Para que la vida no sea valores negativos
  if(vida_enemigo <= 0){
    vida_enemigo = 0;
    barra_interna[0].style.setProperty('border','0px solid');
    text.innerHTML = name[0].innerHTML + ' murió en la fría soledad de la esclavitud por su relativa fragilidad.<br/> En el abismo de la violencia pokemón y sus peleas clandestinas.'
  }
}

//Lo que pasa cuando se da clcik en cada botón
function resta_al_enemigo_1(){
  vida_enemigo -= 3;
  controlar_vida_enemigo();
  barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
  if(vida_enemigo > 0){
    text.innerHTML = name[1].innerHTML + ' ha quemado con el lanzallamas a ' + name[0].innerHTML + '.';
  }
  change_numbers_1.innerHTML = vida_enemigo;
}
function resta_al_enemigo_2(){
  vida_enemigo -= 2;
  controlar_vida_enemigo();
  barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
  if(vida_enemigo > 0){
    text.innerHTML = name[1].innerHTML + ' le ha lanzado  un ' + action[1].innerHTML.toLowerCase() + ' a ' + name[0].innerHTML + '.';
  }
  change_numbers_1.innerHTML = vida_enemigo;
}
function resta_al_enemigo_3(){
  vida_enemigo -= 1;
  controlar_vida_enemigo();
  barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
  if(vida_enemigo > 0){
    text.innerHTML = name[1].innerHTML +  ' le ha lanzado un' + ataque_random[Math.floor(Math.random() * (ataque_random.length)) ] + ' a ' + name[0].innerHTML + '.';
  }
  change_numbers_1.innerHTML = vida_enemigo;
}
function resta_al_enemigo_4(){
  vida_enemigo -= 5;
  controlar_vida_enemigo();
  barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
  if(vida_enemigo > 0){
    text.innerHTML = name[1].innerHTML + ' le ha lanzado un ' + action[3].innerHTML + ' a ' + name[0].innerHTML + '.<br/>Y ha sido super efectivo.';
  }
  change_numbers_1.innerHTML = vida_enemigo;
}

//Los eventos del personaje 1
action[0].addEventListener('click',resta_al_enemigo_1);
action[1].addEventListener('click',resta_al_enemigo_2);
action[2].addEventListener('click',resta_al_enemigo_3);
action[3].addEventListener('click',resta_al_enemigo_4);