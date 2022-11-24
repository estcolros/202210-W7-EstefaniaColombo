import { Character } from './character.js';
export class Advisor extends Character {
    advises;
    constructor(name, family, age, isAlive, message, imageSource, advises) {
        super(name, family, age, isAlive, message, imageSource);
        this.advises = advises;
        this.message = "I don't know why, but I think I'm going to die soon.";
        this.emoji = '🎓';
    }
}
