class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
  }
  protect(stark) {
    this.starksToProtect.push(stark);
    if (this.home != stark.location) {
      this.starksToProtect = [];
    }
  }
}

module.exports = Direwolf;