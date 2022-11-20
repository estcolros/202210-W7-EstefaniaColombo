interface Person {
    name: string;
    family: string;
    age: number;
    state: boolean;
    message: string;
    isAlive: boolean;
    serie: string;

    communicate: () => string;
    die: () => void;
}

class character implements Person {
    public isAlive = true;
    public serie = 'Game of Thrones';
    public imageSource!: string;

    constructor(
        public name: string,
        public family: string,
        public age: number,
        public state: boolean,
        public message: string
    ) {}

    communicate() {
        return `${this.name} says: `;
    }

    die() {
        this.isAlive = false;
    }
}

export default character;
