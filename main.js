var c= document.getElementById("canvas");
var ctx = c.getContext("2d");

// ctx.fillRect(50, 100, 300, 85);
// ctx.fillStyle= "#FF0000";
// ctx.fillRect(20, 200, 200, 250);
// ctx.fillRect(20, 20, 40, 20);
// ctx.fillStyle = "#888888";
// ctx.fillRect (250, 20, 40, 20);
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
