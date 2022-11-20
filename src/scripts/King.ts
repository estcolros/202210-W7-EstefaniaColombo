import character from './character.js';

export class King extends character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        public yearsOfReign: number
    ) {
        super(name, family, age, state, message);
    }

    communicate() {
        return `${super.communicate()}You are all going to die.`;
    }
}

export default King;
