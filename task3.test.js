const {round,power,ceiling} = require('./task3.js')

test('testing round', () => {
    expect(round(1.2)).toBe(1);
})

test('testing round', () => {
    expect(round(1.5)).toBe(2);
})

test('testing power', () => {
    expect(power(3,2)).toBe(9);
})

test('testing ceiling', () => {
    expect(ceiling(1.2)).toBe(2);
})

test('testing ceiling', () => {
    expect(ceiling(-1.2)).toBe(-1);
})