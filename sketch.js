// This is the beginning of a moving self portrait.
// Adjust the number of hair strands
let numStrands = 50; 
// Time variable for animation
let t = 0;  
// Length of each wave
let waveLength = 100;  
// Height of the waves
let waveAmplitude = 50;  
// Thickness of the hair strands
let strandThickness = 3; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  // Dark brown hair color
  stroke(53, 42, 34); 
}

function draw() {
  background(255, 203, 164);

  // Update time for smooth flow
  t += 0.01;

  // Calculate the starting x position to center the hair horizontally on screen
  let startX = width / 5; // Center horizontally
  let startY = 0; // Start at the top of the screen to bottom

  // Draw hair strands
  for (let i = 0; i < numStrands; i++) {
    let offset = map(i, 0, numStrands, -200, 200); // Create slight variation between strands
    drawHair(startX + i * 10, startY, offset);  // Call the hair drawing function
  }
}

function drawHair(x, y, offset) {
  // Increase stroke weight to make the strands thicker
  strokeWeight(strandThickness);

  // Draw multiple layers for thicker strands
  for (let j = -3; j <= 3; j++) {
    beginShape();
    // Perlin noise-based smooth flow movement with connected waves
    for (let i = 0; i <= waveLength * 10; i++) {
      let waveIndex = i / waveLength; // Calculate wave index
      let x1 = x + j + sin(TWO_PI * waveIndex) * waveAmplitude + noise(t + waveIndex + offset) * 20; // X-coordinate with sin wave
      let y1 = y + i * 5; // Increase y to create the hair length

      curveVertex(x1, y1);  // Smoothly connect the points so not choppy
    }
    endShape();
  }
}





