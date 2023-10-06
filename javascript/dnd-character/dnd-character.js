//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
let rolls = [];

// roll dice 4x and safe in 'rolls'
function rollDice(){
for (let i = 1; i < 4; i++){
  rolls =+ Math.random();
}
return rolls;
}


export const abilityModifier = () => {
  rollDice();
  rolls.sort
};

export class Character {
  static rollAbility() {
    throw new Error('Remove this statement and implement this function');
  }

  get strength() {
    throw new Error('Remove this statement and implement this function');
  }

  get dexterity() {
    throw new Error('Remove this statement and implement this function');
  }

  get constitution() {
    throw new Error('Remove this statement and implement this function');
  }

  get intelligence() {
    throw new Error('Remove this statement and implement this function');
  }

  get wisdom() {
    throw new Error('Remove this statement and implement this function');
  }

  get charisma() {
    throw new Error('Remove this statement and implement this function');
  }

  get hitpoints() {
    throw new Error('Remove this statement and implement this function');
  }
}
