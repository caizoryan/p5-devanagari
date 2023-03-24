let font;
let masterPoints = [];
let index = 0;
let text = "Monकी";
let disturbance = 10; // higher more anxiety
let complexity = 0.05; //higher is more complexity
// let text = "जुगाड़";
function preload() {
  font = loadFont("chikki.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  masterPoints = font.textToPoints(text, 100, 800, 600, {
    sampleFactor: complexity,
  });
  stroke(255);
}

function draw() {
  background(0, 10);

  for (let i = 0; i < masterPoints.length; i++) {
    if (i + 2 > masterPoints.length) break;
    line(
      masterPoints[i].x + random(disturbance),
      masterPoints[i].y + random(disturbance),
      masterPoints[i + 1].x + random(disturbance),
      masterPoints[i + 1].y + random(disturbance)
    );
  }
}
