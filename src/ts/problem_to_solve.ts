import puzzle_svg from '../svg/puzzle.svg'
import { Animal } from './animal'
import { Utils } from './utils'

export class ProblemToSolve {
    animals: Animal[]
    number_1: number
    number_2: number
    missing: string
    total: number
    solution: number

    constructor(animals: Animal[], number_1: number, number_2: number, missing: string, total: number) {
        this.animals = animals
        this.number_1 = number_1
        this.number_2 = number_2
        this.missing = missing
        this.total = total
        this.solution = total - number_1 - number_2
    }

    render(div: HTMLDivElement) {
        div.innerHTML = puzzle_svg
        const svg: SVGSVGElement = div.querySelector('svg')!
        svg.querySelector('#number-left')!.innerHTML = this.number_or_animal(this.number_1);
        svg.querySelector('#number-up')!.innerHTML = this.number_or_animal(this.number_2);
        svg.querySelector('#number-center')!.innerHTML = this.total.toString();
        svg.querySelector('#number-right')!.innerHTML = this.missing;
    }

    number_or_animal(num: number): string {
        if (num >= this.animals.length) {
            return num.toString();
        }
        return Utils.choose([num.toString(), this.animals[num].emoji]);
    }
}
