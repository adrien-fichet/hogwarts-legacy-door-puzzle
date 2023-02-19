import { expect, it } from 'vitest'
import { Utils } from '../src/ts/utils'

it('capitalize', () => {
    expect(Utils.capitalize('abcd')).toBe('Abcd')
    expect(Utils.capitalize('Abcd')).toBe('Abcd')
    expect(Utils.capitalize('ABCD')).toBe('ABCD')
    expect(Utils.capitalize('abCD')).toBe('AbCD')
})

it('randomNumber', () => {
    const tmp = Math.random
    Math.random = () => 1
    expect(Utils.randomNumber(10)).toBe(10)
    expect(Utils.randomNumber(1)).toBe(1)
    Math.random = tmp
})

it('choose', () => {
    const tmp = Math.random
    Math.random = () => 0
    expect(Utils.choose([1, 2])).toBe(1)
    expect(Utils.choose(['abc', 2])).toBe('abc')
    expect(Utils.choose(['abc', 'def'])).toBe('abc')
    Math.random = () => 0.5
    expect(Utils.choose([1, 2])).toBe(2)
    expect(Utils.choose([1, 'abc'])).toBe('abc')
    expect(Utils.choose(['abc', 'def'])).toBe('def')
    Math.random = tmp
})
