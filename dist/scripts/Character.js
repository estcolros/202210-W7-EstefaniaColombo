export class Character {
    name;
    family;
    age;
    isAlive;
    message;
    imageSource;
    serie;
    emoji;
    constructor(name, family, age, isAlive = true, message = '', imageSource, serie = 'Game of Thrones', emoji = '') {
        this.name = name;
        this.family = family;
        this.age = age;
        this.isAlive = isAlive;
        this.message = message;
        this.imageSource = imageSource;
        this.serie = serie;
        this.emoji = emoji;
    }
    communicate() {
        return this.message;
    }
    die() {
        this.isAlive = false;
    }
}
