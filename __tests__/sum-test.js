describe('sum', function() {
    it('adds 1 + 2 to equal 3', function() {
        var sum = require('../sum');
        expect(sum(1, 2)).toBe(3);
    });
    it('ensures that log was called 2 times', () => {
        global.console.log = jest.fn();
        var sum = require('../sum');
        sum(1, 2);
        expect(console.log.mock.calls.length).toBe(2) //?
    })
});
