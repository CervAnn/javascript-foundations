class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
  }
  encounter(human) {
    human.encounterCounter = 0;
    human.encounterCounter++;
  }
}

module.exports = Ogre;