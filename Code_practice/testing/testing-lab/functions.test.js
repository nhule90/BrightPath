const myfunctions = require('./functions')
test('return 2', () => {
    expect(myfunctions.returnTwo()).toBe(2)
    });
test('greeting name', () => {
    expect(myfunctions.greeting('James')).toBe('Hello, James.'),
    expect(myfunctions.greeting('Jill')).toBe('Hello, Jill.')
    });

describe('Math functions', () => {
    test('add 2 numbers',() => {
        expect(myfunctions.add(1,2)).toBe(3),
        expect(myfunctions.add(5,9)).toBe(14)
        })
    test('subtract 2 numbers',() => {
        expect(myfunctions.subtract(3,2)).toBe(1),
        expect(myfunctions.subtract(5,9)).toBe(-4)
        });
    
    test('multiply 2 numbers',() => {
        expect(myfunctions.multiply(1,2)).toBe(2),
        expect(myfunctions.multiply(5,9)).toBe(45)
        });
    
    test('divide 2 numbers',() => {
        expect(myfunctions.divide(1,2)).toBe(0.5),
        expect(myfunctions.divide(10,2)).toBe(5)
        });
})
