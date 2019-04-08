class Wizard {
    constructor(wizard) {
        this.name = wizard.name;
        this.bearded = wizard.bearded;
        this.bearded = wizard.bearded === undefined;
        this.isRested = true;
        this.spellCounter = 0;
    }
    incantation(spell) {
        return spell.toUpperCase();
    }
    cast() {
        this.spellCounter++;
        if (this.spellCounter >= 3) {
            this.isRested = false;
        return 'I SHALL NOT CAST';
        }
        return 'MAGIC BULLET';
    }
}

module.exports = Wizard;
