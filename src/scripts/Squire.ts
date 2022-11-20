import character from './character.js';

export class Squire extends character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        degreeOfPelotism: number,
        public advises: character
    ) {
        super(name, family, age, state, message);
    }

    communicate() {
        return `${super.communicate()}I'm a loser.`;
    }
}

export default Squire;
