$(document). keydown(function(e){
  if(e.keyCode == 37){
    player.dir ="left"
   player.velX = -10;

 }
  if(e.keyCode == 38) player.velY = -10;
  if(e.keyCode == 39){
    player.dir= "right"
    player.velX = 10;
  }
  if(e.keyCode == 40) player.velY = 10;
});
$(document). keyup(function(e){
  if(e.keyCode == 37) player.velX = 0;
  if(e.keyCode == 38) player.velY = 0;
  if(e.keyCode == 39) player.velX = 0;
  if(e.keyCode == 40) player.velY = 0;
});
