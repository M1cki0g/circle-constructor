function Circle(radius) {
  console.log(this);
  this.radius = radius;
  this.aff = function () {
    console.log("draw " + this.radius);
  };
}

let circle = new Circle(5);
circle.aff();
