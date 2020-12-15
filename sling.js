class Sling{
  constructor(bodyA, pointB){
var options = {
    'bodyA':bodyA,
    'pointB':pointB,
    'stiffness':1.2,
    'length':200,
}
this.pointB = pointB;
this.sling = Constraint.create(options);
World.add(world, this.sling);
}
display(){
if(this.rope.bodyA){
var pointA = this.rope.bodyA.position;
var pointB = pointB;
push();
stroke(48, 22, 8);
strokeWeight(2);
line(pointA.x, pointA.y, pointB.x, pointB.y);
pop(); 
  } 
 }
}