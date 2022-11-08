const {sum , subtract, divide , multiply} = require('./sum.js');

test('Testing sum', () => {
    expect(sum(1,2)).toBe(3);
});

test('Testing subtract', () => {
    expect(subtract(1,2)).toBe(-1);
});
test('Testing divide', () => {
    expect(divide(4,2)).toBe(2);
});
test('Testing divide', () => {
    expect(divide(4,0)).toBe(undefined);
});
test('Testing multiply', () => {
    expect(multiply(1,2)).toBe(2);
});