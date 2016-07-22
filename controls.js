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
$(document).on("touchstart", function(e){
  var touchX=e.touches[0].clientX;
  var touchY = e.touches [0].clientY;
  if (touchX < player.x) player.velX = -10;
  if (touchX > player.x) player.velX = 10;
  if (touchY < player.y) player.velY = -10;
  if (touchY > player.y) player.velY = 10;
});
$(document).on("touchend", function(e){
player.velX=0;
player.velY=0;
});
