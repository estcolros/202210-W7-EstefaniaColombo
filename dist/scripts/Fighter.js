import { Character } from './Character.js';
export class Fighter extends Character {
    dexterity;
    weapon;
    constructor(name, family, age, isAlive, message, imageSource, dexterity, weapon) {
        super(name, family, age, isAlive, message, imageSource);
        this.dexterity = dexterity;
        this.weapon = weapon;
        this.message = 'First I hit and then I ask.';
        this.emoji = '🗡';
    }
}
