import { Animal } from './animal'
import { Utils } from './utils'

export class Choice {
    animals: Animal[]
    select: HTMLSelectElement

    constructor(animals: Animal[]) {
        this.animals = animals
        this.select = document.createElement('select')
    }

    createElement(): HTMLDivElement {
        const div = document.createElement('div')
        this.animals.forEach((animal: Animal, index: number) => {
            const opt = document.createElement('option')
            opt.setAttribute('value', index.toString())
            opt.innerText = Utils.capitalize(animal.name)
            this.select.appendChild(opt)
        })
        div.appendChild(this.select)
        return div
    }

    getValue(): number {
        return parseInt(this.select.value)
    }

    render(div: HTMLDivElement) {
        div.appendChild(this.createElement())
    }
}
