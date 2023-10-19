function setup() {
    createCanvas(400, 400);
   background("pink");
  }
  
   
  function draw() {
    stroke("rgb(158,196,252)");
    fill("rgb(236,236,173)");
    
    if(mouseIsPressed)
    rect(mouseX, mouseY, 20, 20);
  }