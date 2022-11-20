import character from './character.js';

class Fighter extends character {
    constructor(
        name: string,
        family: string,
        age: number,
        state: boolean,
        message: string,
        dexterity: number,
        public weapon: string
    ) {
        super(name, family, age, state, message);
    }

    communicate(): string {
        return `${super.communicate()}First I hit and then I ask.`;
    }
}

export default Fighter;
