/* change default application behavior */
var defaultMode = "image";
var defaultSize = 32;
var defaultDisplay = "glyph"
var defaultEmoji = 111;
var backgroundColor = "hsb(0, 0%, 0%)";

function Glyph() {

  this.draw = function(values, size) {

    // map lightness to large circle shade
    let color1 = map(values[2], 0, 100, 10, 70)
    strokeUniform(color1);
    fillUniform(color1)
    let s2 = size/2;


    // inner size is set to 30%
    let inner_size = 0.2 + 0.4 * 0.3;
    let s3 = size * inner_size;

    // inner color based on saturation
    let color2 = map(values[1], 0, 100, color1+20, 240)
    fillUniform(color2);
    strokeUniform(color2);

    // hue controls left/right shift
    let shift_frac = (values[0] - 180.0) / 180.0;
    let max_shift = 0.5 * (size - s3);
    let x_shift = shift_frac * max_shift;

    let hue = values[0];
    let saturation = values[1];
    let lightness = values[2];
    let rectsize = size / 2;
    rectMode(CENTER);

push()
  translate(size/2,size/2)
  fillUniform(values[2]);
  polygon(0, 0, size/2, saturation/20 +3); // background polygon being drawn
pop()

push()
  function polygon(x, y, radius, points) { // idea for polygons https://p5js.org/examples/form-regular-polygon.html
  angleMode(RADIANS);
  let angle = TWO_PI / points;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let xpoint = x + cos(a) * radius; // where the points of the polygon are going to be drawn
    let ypoint = y + sin(a) * radius;
  vertex(xpoint, ypoint);
  }
  endShape(CLOSE);
}
pop()

push()
  let linerotation = 10 // made it so that there can't be a huge amount of rotations

  if (hue > 320){
    linerotation = 8;
  }

  if (hue < 40){
    linerotation = 8;
  }

  strokeUniform(0);
  let smallhue = map(hue,0,360,1,9) // mapping hue to be between 1 and 9
  let reverseSat = map(saturation, 0, 100, -7, -1) // have to nageative map saturation
  let reverselightness = map(lightness, 0, 100, 0, 2)

  translate(size/2,size/2);
  angleMode(RADIANS);
  beginShape();
  strokeWeight(reverselightness);
  noFill();
  let petals = (smallhue/reverseSat); // petals is the result of n/d which is what shape the rose will end up being (how many petals it will have)

  for(var a = 0; a <TWO_PI * linerotation/4; a += 0.05){ // a += 0.2 means no lag mode
  var r = size/2 * cos(petals * a);
  var x = r* cos(a);
  var y = r * sin(a);
  vertex(x,y);
}
endShape(CLOSE);
pop()

  }
}
