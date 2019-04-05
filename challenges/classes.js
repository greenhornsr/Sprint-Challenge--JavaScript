// 1. Copy and paste your prototype in here and refactor into class syntax.

/*
// original CuboidMaker constructor
function CuboidMaker(cubAttributes){
    this.length = cubAttributes.length;
    this.width = cubAttributes.width;
    this.height = cubAttributes.height;
  };
*/


//  class refactored constructor
class CuboidMaker2{
    constructor(cubAttributes){
        this.length = cubAttributes.length;
        this.width = cubAttributes.width;
        this.height = cubAttributes.height;
    }
    // Class Methods
    volume(){
        return (this.length * this.width) * this.height
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height) 
    }    
}

/*
// Original Prototypes
  CuboidMaker.prototype.volume = function(){
    return (this.length * this.width) * this.height
  };

  CuboidMaker.prototype.surfaceArea = function(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height) 
  };
*/


  const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.