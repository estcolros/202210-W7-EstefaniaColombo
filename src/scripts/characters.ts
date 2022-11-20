import King from './King.js';
import Fighter from './Fighter.js';
import Squire from './Squire.js';
import Advisor from './Advisor.js';

const joffrey = new King(
    'Joffrey',
    'Baratheon',
    16,
    true,
    'You are all going to die.',
    2
);

const jaime = new Fighter(
    'Jaime',
    'Lannister',
    35,
    true,
    'First I hit and then I ask',
    8,
    'Sword'
);
const daenerys = new Fighter(
    'Daenerys',
    'Targaryen',
    24,
    true,
    'First I hit and then I ask',
    10,
    'Dragons'
);

const tyrion = new Advisor(
    'Tyrion',
    'Lannister',
    39,
    true,
    "I don't know why, but I think I'm going to die soon",
    daenerys
);

const bronn = new Squire(
    'Bronn',
    'AguasNegras',
    56,
    true,
    "I'm a loser",
    0,
    jaime
);

joffrey.imageSource = '/assets/images/joffrey.jpg';
jaime.imageSource = '/assets/images/jaime.jpg';
daenerys.imageSource = '/assets/images/daenerys.jpg';
tyrion.imageSource = '/assets/images/tyrion.jpg';
bronn.imageSource = '/assets/images/bronn.jpg';

const charactersList = [joffrey, jaime, daenerys, tyrion, bronn];
export default charactersList;
