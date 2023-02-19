export class Utils {
    static capitalize(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1)
    }

    static randomNumber(max: number): number {
        return Math.floor(Math.random() * max)
    }

    static choose(choices: any[]): any {
        const index = Math.floor(Math.random() * choices.length)
        return choices[index]
    }
}
