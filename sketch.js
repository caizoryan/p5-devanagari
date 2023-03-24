let font;
let masterPoints = [];
let index = 0;
let text = "Monकी";
let disturbance = 10;
let operator = "add";
// let text = "जुगाड़";
function preload() {
  font = loadFont("chikki.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 8; i++) {
    masterPoints.push(
      font.textToPoints(text, 100, 800, 600, {
        sampleFactor: 0.001 + i * 0.003,
      })
    );
  }
  fill(255);
  stroke(200, 70, 0);
  setInterval(() => {
    if (index === 7) index = 0;
    index++;
  }, 1000);
  setInterval(() => {
    if (disturbance === 40) operator = "subtract";
    else if (disturbance === 0) operator = "add";
    if (operator === "add") disturbance++;
    else if (operator === "subtract") disturbance--;
  }, 100);
}

function draw() {
  background(0, 17);
  for (let i = 0; i < masterPoints[index].length; i++) {
    if (i + 2 > masterPoints[index].length) break;
    line(
      masterPoints[index][i].x + random(disturbance),
      masterPoints[index][i].y + random(disturbance),
      masterPoints[index][i + 1].x + random(disturbance),
      masterPoints[index][i + 1].y + random(disturbance)
    );
    // rect(
    //   points[i].x + random(10),
    //   points[i].y + random(10),
    //   random(10),
    //   random(10)
    // );
  }
}
