var player = {
  x:50,
  y:625,
velX : 0,
velY : 0,
sprites : [document. getElementById("playerf1"),
          document.getElementById("playerf2"),
          document.getElementById("playerf3"),
          document.getElementById("playerf4")

],
spriteNum : 0,
dir: "right",
update: function(){
  this.x += this.velX;
  this.y += this.velY;
  if (this.velX !=0 || this.velY !=0 )
    this.spriteNum = this.spriteNum +1;
  if (this.spriteNum > 3) this.spriteNum  = 0;
},
render : function(){
  if (this.dir == "left"){
    flipCtx(ctx, this);
  }
  ctx.drawImage(this.sprites[this.spriteNum], this.x, this.y);
  if (this.dir == "left"){
  restoreCtx(ctx);
  }
  //ctx.fillRect(this.x, this.y, 300, 85);

}
};
function flipCtx(ctx){
  ctx.save();
  ctx.translate(player.x + 50, 0); //50 is half the width of the plaer
  ctx.scale(-1,1);
  ctx.translate(-player.x-50,0);
  //ready to draw flipped!
}
function restoreCtx(ctx){
  ctx.restore();
}
