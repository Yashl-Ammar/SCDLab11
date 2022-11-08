const  {reverse} = require('./task4.js')

test('testing reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})


test('testing reverse', () => {
    expect(reverse('helloworld')).toBe('dlrowolleh');
})
