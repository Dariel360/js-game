var enemy = {
  x:800,
  y:600,
velX : 0,
velY : 0,
sprite: [document.getElementById("enemy")],
update: function(){
  var a= (this.x-player.x)*(this.x-player.x);
  var b = (this.y-player.y)*(this.y-player.y);
  var dist= Math.sqrt(a+b);
  if (dist< 10){
    player.dead = true;
  }
  if (this.x < player .x){
    this.x = this.y + 3;
  }
  if (this.x > player.x){
    this.x = this.x -3;
  }
  if(this.y < player.y){
    this.y = this.y + 3;
  }
  if(this.y > player.y ){
    this.y = this.y -3;
  }
},
render : function(){
  ctx.drawImage(this.sprite[0], this.x, this.y);
  restoreCtx(ctx);
}
};
