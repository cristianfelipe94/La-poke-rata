// Funciones
let funciones = {
   

  start_game(){
    music_4_battle.play();
    start_section[0].style.setProperty('top','-100vh');
  },


  control_sound(){
    if(sound_viewer == true){
      icon_transition[0].setAttribute('class','icon_transition sound_off');
      music_4_battle.pause();
      sound_viewer = false;
    }else if(sound_viewer == false){
      icon_transition[0].setAttribute('class','icon_transition sound_on');
      music_4_battle.play();
      sound_viewer = true;
    }
  },


  resta_al_enemigo_1(){
    funciones.manejo_de_turnos();
    vida_enemigo -= 1;
    funciones.controlar_vida();
    barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
    if(vida_enemigo > 0){
      text.innerHTML = name[1].innerHTML + ' ha quemado con el lanzallamas a ' + name[0].innerHTML + '.';
    }
    change_numbers_1.innerHTML = vida_enemigo;
  },


  resta_al_enemigo_2(){
    funciones.manejo_de_turnos();
    vida_enemigo -= 1;
    funciones.controlar_vida();
    barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
    if(vida_enemigo > 0){
      text.innerHTML = name[1].innerHTML + ' le ha lanzado  un ' + action[1].innerHTML.toLowerCase() + ' a ' + name[0].innerHTML + '.';
    }
    change_numbers_1.innerHTML = vida_enemigo;
  },


  resta_al_enemigo_3(){
    funciones.manejo_de_turnos();
    vida_enemigo -= 1;
    funciones.controlar_vida();
    barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
    if(vida_enemigo > 0){
      text.innerHTML = name[1].innerHTML +  ' le ha lanzado un' + ataque_random[Math.floor(Math.random() * (ataque_random.length)) ] + ' a ' + name[0].innerHTML + '.';
    }
    change_numbers_1.innerHTML = vida_enemigo;
  },


  resta_al_enemigo_4(){
    funciones.manejo_de_turnos();
    vida_enemigo -= 5;
    funciones.controlar_vida();
    barra_interna[0].style.setProperty('width',vida_enemigo * 10 + 'px');
    if(vida_enemigo > 0){
      text.innerHTML = name[1].innerHTML + ' le ha lanzado un ' + action[3].innerHTML + ' a ' + name[0].innerHTML + '.<br/>Y ha sido super efectivo.';
    }
    change_numbers_1.innerHTML = vida_enemigo;
  },



  controlar_vida(){
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
    
    if(vida_propia <= 32){
      barra_interna[1].setAttribute('class','barra_interna color_1');
    }
    if(vida_propia <= 20){
      barra_interna[1].setAttribute('class','barra_interna color_2');
    }
    if(vida_propia <= 10){
      barra_interna[1].setAttribute('class','barra_interna color_3');
    }
    //Para que la vida no sea valores negativos
    if(vida_enemigo <= 0){
      vida_enemigo = 0;
      barra_interna[0].style.setProperty('border','0px solid');
      text.innerHTML = name[0].innerHTML + ' murió en la fría soledad de la esclavitud por su relativa fragilidad.<br/>';
      text.innerHTML += 'En el abismo de la violencia pokemón y sus peleas clandestinas.';
    }
    if(vida_propia <= 0){
      vida_propia = 0;
      barra_interna[1].style.setProperty('border','0px solid');
      text.innerHTML = name[1].innerHTML + ' murió porque fuiste un mal entrenador y una completa desgracia como ser humano.<br/>';
    }
  },


  manejo_de_turnos(){
    let estado_del_turno = 0;
    grid_options[0].style.setProperty('display','none');
    text.style.setProperty('width','94%');
    window.setTimeout(mostrar_options, 3000);
    function mostrar_options(){
      if(vida_enemigo != 0 || vida_propia != 0){
        switch(estado_del_turno){
          case 0:
            grid_options[0].style.setProperty('display','none');  
            text.innerHTML = name[0].innerHTML + ' está enojado';
            window.setTimeout(mostrar_options, 3000);
            break;
          case 1:
            text.innerHTML = name[0].innerHTML + ' le ha lanzado un' + ataque_random[Math.floor(Math.random() * (ataque_random.length)) ] + ' a ' + name[1].innerHTML;
            grid_options[0].style.setProperty('display','none');
            if(vida_enemigo != 0){
              vida_propia -= 4;
            }
            funciones.controlar_vida();
            barra_interna[1].style.setProperty('width',vida_propia * 10 + 'px');
            change_numbers_2.innerHTML = vida_propia;
            window.setTimeout(mostrar_options, 3000);
            break;
          case 2:
            grid_options[0].style.setProperty('display','grid');
            text.style.setProperty('width','35%');
            text.innerHTML = 'A luchar!!!';
            break;    
        }
        if(vida_enemigo == 0 || vida_propia == 0){
              grid_options[0].style.setProperty('display','none');
            text.style.setProperty('width','94%');
            funciones.controlar_vida(); 
        }
        estado_del_turno++;
      }
    }
  }
}




// Declaraciones
let change_numbers_1 = document.getElementById('change_numbers_1'), 
    change_numbers_2 = document.getElementById('change_numbers_2'),
    music_4_battle = document.getElementById('music_4_battle'), 
    content_sound = document.getElementById('content_sound'),
    start_button = document.getElementById('start_button'),
    text = document.getElementById('text');

let name = document.getElementsByClassName('name'),
    action = document.getElementsByClassName('action'),
    grid_options = document.getElementsByClassName('grid_options'),
    start_section = document.getElementsByClassName('start_section'),
    barra_interna = document.getElementsByClassName('barra_interna'),
    icon_transition = document.getElementsByClassName('icon_transition');

let sound_state = 0,
    sound_viewer = true,    
    vida_enemigo = parseInt(document.getElementById('vida_max_1').innerHTML),
    vida_propia = parseInt(document.getElementById('vida_max_2').innerHTML),
    ataque_random = ['a banana', 'a crisis existencial', ' televisor', 'a reseña',  
                     'a peluca', ' comentario hiriente', ' Afedo cámate pofavo', 
                     'a indirecta', ' rosario', ' ecoladrillo', 'a solicitud de amistad', 
                     ' "No gracias, es que quiero concentrarme en mis estudios pero sigamos siendo amigos"'];                     

// Eventos
action[0].addEventListener('click',funciones.resta_al_enemigo_1);
action[1].addEventListener('click',funciones.resta_al_enemigo_2);
action[2].addEventListener('click',funciones.resta_al_enemigo_3);
action[3].addEventListener('click',funciones.resta_al_enemigo_4);
content_sound.addEventListener('click',funciones.control_sound);
music_4_battle.addEventListener('ended',funciones.cambiar_song);
start_button.addEventListener('click',funciones.start_game);
