class Pendulum {
constructor(x, y, width, height){
var options = {
   'restitution':0.2,
   'friction':1,
   'density':0.4,
}
this.body = Bodies.rectangle(x, y, width, height, options);
World.add(world, this.body);
}
display(){
var pos = this.body.position;
var angle = this.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
fill(black);
ellipse(pos.x, pos.y, this.width, this.height);
pop();
}
}