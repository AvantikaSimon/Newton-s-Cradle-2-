const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling1, sling2, sling3, sling4, sling5; 
var pendulums = [];

function setup() {
createCanvas(windowWidth/2, windowHeight/2);  

for(var j = 125; j < 326; j = j + 50){
   pendulums.add(new Pendulum(j, 500, 50, 50));
 }

sling1 = new Sling(pendulums[0], {x:125, y:350});
sling2 = new Sling(pendulums[1], {x:175, y:350});
sling3 = new Sling(pendulums[2], {x:225, y:350});
sling4 = new Sling(pendulums[3], {x:275, y:350});
sling5 = new Sling(pendulum[4], {x:325, y:350});
}

function draw(){
background("white") 
Engine.update(engine);
pendulums[0].display();
pendulums[1].display();
pendulums[2].display();
pendulums[3].display();
pendulums[4].display();

sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();  
}

function mouseDragged(){
Matter.Body.setPosition(pendulums[4], {x:mouseX, y:mouseY});
}