class Utils {
    static capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    static randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    static choose(choices) {
        const index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }
}

class Choice {
    constructor(animals) {
        this.animals = animals;
        this.select = document.createElement('select');
    }
    createElement() {
        const div = document.createElement('div');
        for (var i=0; i < this.animals.length; i++) {
            const animal = this.animals[i];
            const opt = document.createElement('option');
            opt.setAttribute('value', i);
            opt.innerText = Utils.capitalize(animal.name);
            this.select.appendChild(opt);
        }; 
        div.appendChild(this.select);
        return div;
    }
    getValue() {
        return parseInt(this.select.value);
    }
}

class ProblemToSolve {
    constructor(svg_index, animals, number_1, number_2, number_missing, total) {
        this.svg = document.getElementsByTagName('svg')[svg_index];
        this.animals = animals;
        this.number_1 = number_1;
        this.number_2 = number_2;
        this.number_missing = number_missing;
        this.total = total;
        this.solution = total - number_1 - number_2;
        this.fill_svg();
    }
    fill_svg() {
        this.svg.querySelector('#number-left').innerHTML = this.number_or_animal(this.number_1);
        this.svg.querySelector('#number-up').innerHTML = this.number_or_animal(this.number_2);
        this.svg.querySelector('#number-center').innerHTML = this.total;
        this.svg.querySelector('#number-right').innerHTML = this.number_missing;
    }
    number_or_animal(number) {
        if (number >= this.animals.length) {
            return number;
        }
        // return Utils.choose([number, this.animals[number].emoji]);
        return this.animals[number].emoji;
    }
}

class Animal {
    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
    }
}

const animals = [
    new Animal('bear', '&#128059;'), 
    new Animal('horse', '&#128052;'),
    new Animal('ant', '&#128028;'),
    new Animal('dragon', '&#128050;'),
    new Animal('dolphin', '&#128044;'),
    new Animal('crab', '&#129408;'),
    new Animal('lizard', '&#129422;'),
    new Animal('octopus', '&#128025;'),
    new Animal('spider', '&#128375;'),
    new Animal('frog', '&#128056;')
];
const container = document.querySelector('#container');
const puzzle_1 = document.querySelector('#puzzle-1');
const puzzle_2 = document.querySelector('#puzzle-2');

// List of animals
const animalList = document.createElement('div');
animalList.setAttribute('class', 'animal-list');
animals.forEach(animal => {
    const animal_span = document.createElement('span');
    animal_span.innerHTML = animal.emoji;
    animalList.appendChild(animal_span);
});
container.insertBefore(animalList, puzzle_1);

// Problem 1
const problem_1 = new ProblemToSolve(0, animals, 11, 2, '?', 21);
const choice_1 = new Choice(animals);
puzzle_1.appendChild(choice_1.createElement());

// Problem 2
const problem_2 = new ProblemToSolve(1, animals, 5, 9, '??', 17);
const choice_2 = new Choice(animals);
puzzle_2.appendChild(choice_2.createElement());


function open_door() {
    const door_status = document.querySelector('#door-status');
    const door_button = document.querySelector('#door-button');
    if (choice_1.getValue() === problem_1.solution && choice_2.getValue() === problem_2.solution) {
        door_status.innerHTML = 'You did it! The door is now open!';
        door_status.setAttribute('class', 'bold');
        door_button.style.display = 'none';
    } else {
        door_status.innerHTML = 'Nope, the door is still locked...';
        door_button.innerHTML = 'Try again to open it!';
    }
}
