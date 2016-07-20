var c= document.getElementById("canvas");
var ctx = c.getContext("2d");

// ctx.fillRect(50, 100, 300, 85);
// ctx.fillStyle= "#FF0000";
// ctx.fillRect(20, 200, 200, 250);
// ctx.fillRect(20, 20, 40, 20);
// ctx.fillStyle = "#888888";
// ctx.fillRect (250, 20, 40, 20);
 var player = {
   x : 0,
   y : 100,
   velX : 0,
   velY : 0,
   sprite : document.getElementById("player"),
 update: function (){
  this.x = this.x + this.velX;
  this.y = this.y + this.velY;
},
render: function(){
  //ctx.fillRect(this.x, this.y, 300, 85);
  ctx.drawImage(this.sprite, this.x , this.y);
}
};
var background = document.getElementById("background");
c.width= window.innerWidth;
c.height = window.innerHeight;
function animate(){
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0,0,500, 500);
  ctx.drawImage(background, 0 , 0, c.width, c.height);
  player.update();
  player.render();
  window.requestAnimationFrame(animate);
}

animate();
$(document). keydown(function(e){
  if(e.keyCode == 37) player.velX = -5;
  if(e.keyCode == 38) player.velY = -5;
  if(e.keyCode == 39) player.velX = 5;
  if(e.keyCode == 40) player.velY = 5;
});
$(document). keyup(function(e){
  if(e.keyCode == 37) player.velX = 0;
  if(e.keyCode == 38) player.velY = 0;
  if(e.keyCode == 39) player.velX = 0;
  if(e.keyCode == 40) player.velY = 0;
});
