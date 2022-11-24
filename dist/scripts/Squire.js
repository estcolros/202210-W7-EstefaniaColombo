import { Character } from './character.js';
export class Squire extends Character {
    degreeOfPelotism;
    advises;
    constructor(name, family, age, isAlive, message, imageSource, degreeOfPelotism, advises) {
        super(name, family, age, isAlive, message, imageSource);
        this.degreeOfPelotism = degreeOfPelotism;
        this.advises = advises;
        this.message = "I'm a loser.";
        this.emoji = '🛡';
    }
}
