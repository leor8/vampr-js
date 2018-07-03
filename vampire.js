class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampInBetween = 0;
    let currVamp = this;

    while(currVamp.creator){
      currVamp = currVamp.creator;
      vampInBetween++;
    }

    return vampInBetween;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfOffspring > vampire.numberOfOffspring;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currVamp = this;
    if(!currVamp.creator || !vampire.creator){
      return currVamp
    }

    while(vampire.creator && currVamp.creator && vampire.creator !== currVamp.creator){
      vampire = vampire.creator;
      currVamp = currVamp.creator;
      if(!vampire.creator) {
        return vampire.creator;
      } else if(!currVamp.creator) {
        return currVamp.creator;
      }
    }


    return currVamp.creator;
  }
}

let rootVampire;
  rootVampire = new Vampire("root");

let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    offspring1 = new Vampire("a");
    offspring2 = new Vampire("b");
    offspring3 = new Vampire("c");
    offspring4 = new Vampire("d");
    offspring5 = new Vampire("e");
    offspring6 = new Vampire("f");
    offspring7 = new Vampire("g");
    offspring8 = new Vampire("h");

    rootVampire.addOffspring(offspring1);
    rootVampire.addOffspring(offspring2);
    rootVampire.addOffspring(offspring3);
    offspring3.addOffspring(offspring4);
    offspring3.addOffspring(offspring5);
    offspring5.addOffspring(offspring6);
    offspring6.addOffspring(offspring7);
    offspring2.addOffspring(offspring8);

console.log(offspring7.name.creator);
//console.log(offspring4.closestCommonAncestor(offspring7).name === offspring3.name);

module.exports = Vampire;















