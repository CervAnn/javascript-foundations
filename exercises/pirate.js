class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.counter = 0;
    this.booty = 0;
  }
  commitHeinousAct() {
    this.counter++;
    this.counter >= 3? this.cursed = true : this.cursed = false;
  }
  robShip() {
    this.booty = 100;
    return 'YAARRR!'
  }
}

module.exports = Pirate;