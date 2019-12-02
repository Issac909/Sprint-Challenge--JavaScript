// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1 {
    constructor(attr){
    this.l = attr.l;
    this.width = attr.width;
    this.height = attr.height;
    }
    volume() {
        return (this.l * this.width * this.height);
      };
    surfaceArea() {
        return  (
        this.width * this.l + this.l * this.height + this.width * this.height * 2
        );
      };
}



const cuboid1 = new CuboidMaker1 ({
  l: 4, 
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log(cuboid.volume());
console.log(cuboid.surfaceArea());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.]
class CubeMaker extends CuboidMaker1 {
    constructor(cAttr){
        super(cAttr);
    };

    cubeSurface() {
      return (this.l * this.width * 6 + " in**2");
    };

    cubeVolume() {
      return this.l * this.width * this.height;
    };
}

const cube = new CubeMaker ({
    l: 12,
    width: 12,
    height: 12
  })

  console.log(cube.cubeVolume());
  console.log(cube.cubeSurface());