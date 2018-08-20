// functions
let functions = {
   

  start_game(){
    music_4_battle.play();
    start_section[0].style.setProperty('top','-100vh');
  },


  control_sound(){
    sound_viewer++;

    if(sound_viewer > 2){
      sound_viewer = 0;
    }
    
    if(sound_viewer == 0){
      icon_transition[0].setAttribute('class','icon_transition sound_on');
      music_4_battle.volume = 1;
    }else if(sound_viewer == 1){
      icon_transition[0].setAttribute('class','icon_transition sound_medium');
      music_4_battle.volume = 0.2;
    }else if(sound_viewer == 2){
      icon_transition[0].setAttribute('class','icon_transition sound_off');
      music_4_battle.volume = 0;
    }
  },


  less_enemy_life_1(){
    functions.turn_management();
    enemy_life -= 0;
    functions.control_life();
    inside_bar[0].style.setProperty('width',enemy_life * 10 + 'px');
    if(enemy_life > 0){
      text.innerHTML = name[1].innerHTML + ' le ha lanzado una '  + action[0].innerHTML.toLowerCase() + ' a ' + name[0].innerHTML + '.<br/>' + name[0].innerHTML + ' se la comió.';
    }
    change_numbers_1.innerHTML = enemy_life;
  },


  less_enemy_life_2(){
    functions.turn_management();
    enemy_life -= 8;
    functions.control_life();
    inside_bar[0].style.setProperty('width',enemy_life * 10 + 'px');
    if(enemy_life > 0){
      text.innerHTML = name[1].innerHTML + ' le ha lanzado  un ' + action[1].innerHTML.toLowerCase() + ' a ' + name[0].innerHTML + '.';
    }
    change_numbers_1.innerHTML = enemy_life;
  },


  less_enemy_life_3(){
    functions.turn_management();
    enemy_life -= 1;
    functions.control_life();
    inside_bar[0].style.setProperty('width',enemy_life * 10 + 'px');
    if(enemy_life > 0){
      text.innerHTML = name[1].innerHTML +  ' le ha lanzado un' + ataque_random[Math.floor(Math.random() * (ataque_random.length)) ] + ' a ' + name[0].innerHTML + '.';
    }
    change_numbers_1.innerHTML = enemy_life;
  },


  less_enemy_life_4(){
    functions.turn_management();
    enemy_life -= 16;
    functions.control_life();
    inside_bar[0].style.setProperty('width',enemy_life * 10 + 'px');
    if(enemy_life > 0){
      text.innerHTML = name[1].innerHTML + ' le ha lanzado un tremendo ' + action[3].innerHTML + ' a ' + name[0].innerHTML + '.<br/>Y ha sido super efectivo.';
    }
    change_numbers_1.innerHTML = enemy_life;
  },



  control_life(){
    //Para que la vida cambie de color
    if(enemy_life <= 32){
      inside_bar[0].setAttribute('class','inside_bar color_1');
    }
    if(enemy_life <= 20){
      inside_bar[0].setAttribute('class','inside_bar color_2');
    }
    if(enemy_life <= 10){
      inside_bar[0].setAttribute('class','inside_bar color_3');
    }
    
    if(own_life <= 32){
      inside_bar[1].setAttribute('class','inside_bar color_1');
    }
    if(own_life <= 20){
      inside_bar[1].setAttribute('class','inside_bar color_2');
    }
    if(own_life <= 10){
      inside_bar[1].setAttribute('class','inside_bar color_3');
    }
    //Para que la vida no sea valores negativos
    if(enemy_life <= 0){
      enemy_life = 0;
      inside_bar[0].style.setProperty('border','0px solid');
      text.innerHTML = name[0].innerHTML + ' murió en la fría soledad de la esclavitud por su relativa fragilidad.<br/>';
      text.innerHTML += 'En el abismo de la violencia pokemón y sus peleas clandestinas.';
      window.setTimeout(function(){
        newFunction();
        final_space.firstElementChild.innerHTML = 'You Win';
        counter.innerHTML = 'Aquí tienes tu arroz';
        counter.style.setProperty('width','60%');
        final_space.style.setProperty('opacity','1');
        final_space.style.setProperty('z-index','1000000');
      }, 3000);
    }
    if(own_life <= 0){
      inside_bar[1].style.setProperty('border','0px solid');
      own_life = 0.1;
      text.innerHTML = name[1].innerHTML + ' murió porque fuiste un mal entrenador y una completa desgracia como ser humano.<br/>';
      window.setTimeout(function(){
        let a = 9;
        final_space.style.setProperty('opacity','1');
        final_space.style.setProperty('z-index','1000000');
  
        function keep_going(){
          final_space.style.setProperty('opacity','0');
          final_space.style.setProperty('z-index','-1000000');
          //Reinicia pelea
          inside_bar[0].setAttribute('class','inside_bar color_1');
          inside_bar[1].setAttribute('class','inside_bar color_1');
  
          change_numbers_1.innerHTML = 32;
          change_numbers_2.innerHTML = 32;
  
          enemy_life = 32;
          own_life = 32;
  
          inside_bar[0].style.setProperty('width',enemy_life * 10 + 'px');
          inside_bar[1].style.setProperty('width',own_life * 10 + 'px');
  
          grid_options[0].style.setProperty('display','grid');
          text.style.setProperty('width','35%');
  
          functions.change_song();
  
          /*
            Uncaught (in promise) DOMException: The play() request was interrupted by a new load request.
          */

          text.innerHTML = "Vamos, que no te humillen de nuevo, el arroz es la clave.";
        }
        
        function no_keep_going(){
          final_space.style.setProperty('opacity','0');
          final_space.style.setProperty('z-index','-1000000');
          //Developers
          the_wrapper.style.setProperty('transition','1s');
          the_wrapper.style.setProperty('top','-100vh');
          document.querySelector('.play_again').addEventListener('click',function(){
            the_wrapper.style.setProperty('top','0vh');
            keep_going();
            text.innerHTML = "¡¡A luchar esclavos!!";
          });
        }
        
        button_ending[0].addEventListener('click',keep_going);
  
        button_ending[1].addEventListener('click',no_keep_going);

      }, 3000);
    }
  },


  turn_management(){
    let turn_moment = 0;
    grid_options[0].style.setProperty('display','none');
    text.style.setProperty('width','94%');
    show_options();
    function show_options(){
      if(enemy_life != 0 || own_life != 0){
        switch(turn_moment){
          case 0:
            grid_options[0].style.setProperty('display','none');  
            text.innerHTML = name[0].innerHTML + ' está enojado';
            window.setTimeout(show_options, 3000);
            break;
          case 1:
            text.innerHTML = name[0].innerHTML + ' le ha lanzado un' + ataque_random[Math.floor(Math.random() * (ataque_random.length)) ] + ' a ' + name[1].innerHTML;
            grid_options[0].style.setProperty('display','none');
            if(enemy_life != 0){
              own_life -= 16;
            }
            functions.control_life();
            inside_bar[1].style.setProperty('width',parseInt(own_life) * 10 + 'px');
            change_numbers_2.innerHTML = parseInt(own_life);
            window.setTimeout(show_options, 3000);
            break;
          case 2:
            grid_options[0].style.setProperty('display','grid');
            text.style.setProperty('width','35%');
            text.innerHTML = 'A luchar!!!';
            break;    
        }
        if(enemy_life == 0 || own_life == 0){
            grid_options[0].style.setProperty('display','none');
            text.style.setProperty('width','94%');
            functions.control_life(); 
        }
        turn_moment++;
      }
    }
  },


  change_song(){
    sound_state++;
    if(sound_state > 3){
      sound_state = 0;
    }
    switch(sound_state){
      case 0:
        music_4_battle.setAttribute('src','sounds/music/music_4_battle.mp3');
        music_4_battle.play();
        break;
      case 1:
        music_4_battle.setAttribute('src','sounds/music/music_4_battle_0.mp3');
        music_4_battle.play();
        break;
      case 2:
        music_4_battle.setAttribute('src','sounds/music/music_4_battle_1.mp3');
        music_4_battle.play();
        break;
      case 3:
        music_4_battle.setAttribute('src','sounds/music/music_4_battle_2.mp3');
        music_4_battle.play();
        break;
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
    inside_bar = document.getElementsByClassName('inside_bar'),
    button_ending = document.getElementsByClassName('button_ending'),
    icon_transition = document.getElementsByClassName('icon_transition');

let final_space = document.querySelector('.final_space'),
    the_wrapper = document.querySelector('.the_wrapper'),
    counter = document.querySelector('.counter');                     
                    
let sound_state = 0,
    sound_viewer = 0,    
    enemy_life = parseInt(document.getElementById('vida_max_1').innerHTML),
    own_life = parseInt(document.getElementById('vida_max_2').innerHTML),
    ataque_random = [' "háblale a la mano"', 'a crisis existencial', ' televisor', 'a reseña',  
                     'a peluca', ' comentario hiriente', ' Afedo cámate pofavo', 
                     'a indirecta', ' rosario', ' ecoladrillo', 'a solicitud de amistad', 
                     ' "No gracias, es que quiero concentrarme en mis estudios pero sigamos siendo amigos"'];                     
 
                     
// Eventos
action[0].addEventListener('click',functions.less_enemy_life_1);
action[1].addEventListener('click',functions.less_enemy_life_2);
action[2].addEventListener('click',functions.less_enemy_life_3);
action[3].addEventListener('click',functions.less_enemy_life_4);
content_sound.addEventListener('click',functions.control_sound);
music_4_battle.addEventListener('ended',functions.change_song);
start_button.addEventListener('click',functions.start_game);

function newFunction() {
  button_ending[0].style.setProperty('display', 'none');
  button_ending[1].style.setProperty('display', 'none');
}
