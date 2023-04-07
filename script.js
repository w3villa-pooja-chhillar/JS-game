let character = document.getElementById('character');
let char_img=  document.getElementById('pika');
let obstacle = document.getElementById('obstacle');
let score=  0;
let state= "running";


// event listener for charcter
 document.addEventListener('keydown', function(){
  jump();
 })
 function jump(){
  if(character.classList != "jump-animation"){
    character.classList.add("jump-animation");
  }
  setTimeout(function(){
    character.classList.remove("jump-animation");
  },500)
 }

//  function check collision
 function checkcollision(){
  let obstacle_left=document.getElementById('obstacle').offsetLeft;
  let char_top = document.getElementById('character').offsetTop;
  console.log("obstace-left" , obstacle_left);
  console.log("char-top", char_top);
  if(obstacle_left<450 && obstacle_left>300 && char_top>400){
    state="gameover";
    obstacle.style.display="none";
    char_img.src="https://github.com/w3villa-talib/pikachu-run/blob/master/img/blast.gif?raw=true";
    setTimeout (function(){
    char_img.src="https://github.com/w3villa-talib/pikachu-run/blob/master/img/rip.png?raw=true";
    },2000)
  }
 }


 setInterval(() => {
  checkcollision();
 },50)
 setInterval(() => {
  if(state=='running'){
    score= score+1;
    document.getElementById('score').innerHTML= score;
  }
 },1000)