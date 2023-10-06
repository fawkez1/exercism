
export const abilityModifier = (score) => {
  if (score < 3){
    throw new Error ('Ability scores must be at least 3');
  }
  else if (score > 18){
    throw new Error('Ability scores can be at most 18');
  }
  let modifier = Math.floor((score - 10) / 2);
  return modifier;
};

export class Character {
  constructor() {
    // Generate ability scores during character creation
    // use the constructor so store results and use them later on.
    this.strengthValue = Character.rollAbility();
    this.dexterityValue = Character.rollAbility();
    this.constitutionValue = Character.rollAbility();
    this.intelligenceValue = Character.rollAbility();
    this.wisdomValue = Character.rollAbility();
    this.charismaValue = Character.rollAbility();
  }
// rolls must be equal to dice sides!!!!!!
  static rollAbility() {
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort((a, b) => a - b); // sort in ascending order
    rolls.shift();
    const sum = rolls.reduce((acc, value) => acc + value, 0);
    return sum;
  }

  get strength() {
    return this.strengthValue;
  }

  get dexterity() {
    return this.dexterityValue;
  }

  get constitution() {
    return this.constitutionValue;
  }

  get intelligence() {
    return this.intelligenceValue;
  }

  get wisdom() {
    return this.wisdomValue;
  }

  get charisma() {
    return this.charismaValue;
  }

  get hitpoints() {
    const sum = 10 + abilityModifier(this.constitutionValue);
    return sum;
  }
}
