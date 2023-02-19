import '../css/main.css'
import { Animal } from './animal'
import { ProblemToSolve } from './problem_to_solve'
import { Choice } from './choice'

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
]

// List of animals
const animal_list = document.querySelector('#animal-list')!
animals.forEach(animal => {
    const animal_span = document.createElement('span')
    animal_span.innerHTML = animal.emoji
    animal_list.appendChild(animal_span)
})

// First puzzle
const problem_1 = new ProblemToSolve(animals, 11, 2, '?', 21)
problem_1.render(document.querySelector('#dessin-1')!)
const choice_1 = new Choice(animals)
choice_1.render(document.querySelector('#choice-1')!)

// Second puzzle
const problem_2 = new ProblemToSolve(animals, 5, 9, '??', 17)
problem_2.render(document.querySelector('#dessin-2')!)
const choice_2 = new Choice(animals)
choice_2.render(document.querySelector('#choice-2')!)

// Door status
const door_status: HTMLSpanElement = document.querySelector('#door-status')!
door_status.innerHTML = 'The door is locked...'

// Door button
const door_button: HTMLButtonElement = document.querySelector('#door-button')!
door_button.innerHTML = 'Try to open it!'
door_button.onclick = () => {
    if (choice_1.getValue() === problem_1.solution && choice_2.getValue() === problem_2.solution) {
        door_status.innerHTML = 'You did it! The door is now open!';
        door_status.setAttribute('class', 'bold');
        door_button.style.display = 'none';
    } else {
        door_status.innerHTML = 'Nope, the door is still locked...';
        door_button.innerHTML = 'Try again to open it!';
    }
}
