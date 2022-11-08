const SumOfMultiples = require('./task2.js');

test('Testing sum of multiples' , () => {
    expect(SumOfMultiples(3,5,10)).toBe(23);
})

test('Testing sum of multiples' , () => {
    expect(SumOfMultiples(3,5,-6)).toBe('Error');
})