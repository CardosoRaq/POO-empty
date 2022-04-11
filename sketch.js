var box1, box2, box3;

function setup() {
  
  createCanvas(500, 500);

  box1 = new Box(300,50,50,50, "green");
  box2 = new Box(150,200,70,70, "purple");

}

function draw() {
  
  background(220);

  box1.display();
  box2.display();

  box2.moveX(0.7);
  box1.moveY(2);
}

