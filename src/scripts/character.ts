export class Character {
    constructor(
        public name: string,
        public family: string,
        public age: number,
        public isAlive: boolean = true,
        public imageSource: string,
        public serie: string = 'Game of Thrones',
        public message?: string,
        public emoji?: string
    ) {}

    communicate() {
        return this.message;
    }

    die() {
        this.isAlive = false;
    }
}
