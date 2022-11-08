const {searchArr} = require('./task5.js')

test('testing searcharr', () => {
    expect(searchArr(10)).toBe(true);
})

test('testing searcharr', () => {
    expect(searchArr(40)).toBe(false);
})
