let stars = [];
let factor = 113;
let speedSliders;

function setup() {
  createCanvas(450, 600);
  speedSliders = createSlider(0, 20, 3, 0.1); //barre "Slide" (debut, fin, initialisationDepart, augmentation
  for (let i = 0; i < 1000; i++) {
    stars[i] = createVector(
      random(-width * factor, width * factor),
      random(-height * factor, height * factor),
      random(10, 400) //creation du vector P5 avec trois valeurs
    );
    stars[i].pz = stars[i].z;
  }
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let star of stars) {
    let x = star.x / star.z;
    let y = star.y / star.z;
    let px = star.x / star.pz;
    let py = star.y / star.pz;
    let d = map(star.z, 0, 400, 1, 1);

    fill(255);
    noStroke();
    circle(x, y, d);
    stroke(80);
    line(x, y, px, py);

    star.pz = star.z;
    star.z -= speedSliders.value();
    if (star.z < 10) {
      star.x = random(-width * factor, width * factor);
      star.y = random(-height * factor, height * factor);
      star.z = 400;
      star.pz = 400;
    }
  }
}
