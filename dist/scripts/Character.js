export class Character {
    name;
    family;
    age;
    isAlive;
    imageSource;
    serie;
    message;
    emoji;
    constructor(name, family, age, isAlive = true, imageSource, serie = 'Game of Thrones', message, emoji) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.isAlive = isAlive;
        this.imageSource = imageSource;
        this.serie = serie;
        this.message = message;
        this.emoji = emoji;
    }
    communicate() {
        return this.message;
    }
    die() {
        this.isAlive = false;
    }
}
