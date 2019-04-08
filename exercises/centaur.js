class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.effort = 0;
    this.layingDown = false;
    this.rested = true;
  }
  shoot() {
    this.effort++;
    if (this.effort >= 2) {
      this.cranky = true;
      return 'NO!'
    }
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
  }
  run() {
    this.effort++;
    if (this.effort >= 2) {
      this.cranky = true;
  }
    return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';

}
  sleep() {
    if (this.layingDown = true) {
      this.cranky = false;
      this.effort = 0;
    }

    return this.standing ? 'NO!' : 'ZZZZ';
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
  if (this.standing = true && this.effort >= 3) {
    this.cranky = false;
    this.rested = false;
  }
  if (this.rested = true) {
    this.cranky = true;
  }
  return 'Not while I\'m laying down!';
}
}

module.exports = Centaur;




















// class Centaur {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.counter = 0;
//     this.layingDown = false;
//   }
//   shoot() {
//     this.counter++
//     if (this.counter >= 3) {
//       this.cranky = true;
//       return 'NO!';
//     } else {
//       return 'Twang!!!'
//     }
//     if (this.standing != true) {
//       return 'NO!'
//     }
//   }
//   run() {
//     this.cranky = true;
//     if (this.standing != true) {
//       return 'NO!'
//     } else {
//     return 'Clop clop clop clop!!!'
//   }
//   }
//   sleep () {
//     if (this.standing = true) {
//       return 'NO!';
//     }
//   }
//   layDown() {
//     this.standing = !this.standing;
//     this.layingDown = !this.layingDown;
//     if (this.standing = true) {
//     this.shoot();
//     this.run();
//   }
//   }
//   standUp() {
//     this.standing = true;
//     this.layingDown = false;
//   }
// }

// module.exports = Centaur;