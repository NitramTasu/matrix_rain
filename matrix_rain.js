
var drop;
var drops = []; 

let font,
  fontsize = 32;
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('data/matrix.otf');
}
function setup() {
  createCanvas(1950, 1000);
  for(let i = 0 ; i< 100; i++){
    drops.push(new Drop(font));
  }
  // Set text characteristics
}

function draw() {
  background(0);
  for(let i = 0 ; i< 100; i++){
    drops[i].fall();
    drops[i].display();
  }
}
