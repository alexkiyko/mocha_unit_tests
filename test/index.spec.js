const assert = require('assert');
const {sum, mult, isPalindrome} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 10', () => {
        assert.equal(sum(2, 4), 6);
    });

    it ('should function sum not equal 0', () => {
        assert.notEqual(sum(2, 4), 5);
    });
});

describe ('function mult', () => {
    it('should function mult equal 8', () => {
        assert.equal(mult(2, 4), 8);
    });

    it('should function mult not equal 9', () => {
        assert.notEqual(mult(2,4), 9);
    });

});

it('should function isPalindrome equals true', () => {
    assert.equal(isPalindrome('ogo'), true);
});

