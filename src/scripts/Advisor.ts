import character from './character.js';

export class Advisor extends character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        public advises: character
    ) {
        super(name, family, age, state, message);
    }

    communicate() {
        return `${super.communicate()}I don't know why, but I think I'm going to die soon.`;
    }
}

export default Advisor;
