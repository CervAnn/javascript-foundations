class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured';
    }
  receiveBelief() {
  this.dust++;
  }
  believe() {
  this.dust = this.dust + 10;
  }
  makeDresses(flower) {
    var array1 = flower;
    var array2 = this.clothes.dresses
    var newArray = array2.concat(array1);
    this.clothes.dresses = newArray;
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    infant.disposition = 'Malicious'
    if (this.Disposition = 'Good natured') {
      return infant;
    } else {
      this.humanWards.unshift(infant);
    }
  }
}

module.exports = Fairy;


















// class Fairy {
//   constructor(name) {
//     this.name = name;
//     this.dust = 10;
//     this.clothes.dresses = clothes || ['Iris'];
//   }
//   receiveBelief() {
//     var dustBefore = this.dust;
//     this.dust++;
//     var dustAfter = this.dust; 
//     var difference = dustAfter - dustBefore;
//     return difference;
//   }
//   believe() {
//     var dustBefore = this.dust;
//     this.dust = this.dust + 10;
//     var dustAfter = this.dust; 
//     var difference = dustAfter - dustBefore;
//     return difference;
//   }
// }

// module.exports = Fairy;