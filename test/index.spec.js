const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isPalindrome, sortArrayUp} = require('../index.js');


describe('function sum', () => {
    it('should function sum equal 10', () => {
        // assert.equal(sum(2, 4), 6);
        expect(sum(2,4 )).eq(6); // example with chai
    });

    it('should function sum equal 10', () => {
        // assert.equal(sum(2, 4), 6);
        expect(sum(1,4 )).not.eq(4); // example with chai
    });

    it('should function sum not equal 0', () => {
        assert.notEqual(sum(2, 4), 5);
    });

    it('should function sum work correctly', () => {
        assert.equal(sum(248, 252), 500);
    });
});


describe('function mult', () => {
    it('should function mult equal 8', () => {
        assert.equal(mult(2, 4), 8);
    });

    it('should function mult not equal 9', () => {
        assert.notEqual(mult(2,4), 9);
    });

    it('should function mult work correctly', () => {
        assert.equal(mult(3, 10), 30);
    });
});


describe('function isPalindrome', () => {
    it('should function isPalindrome equal true', () => {
        assert.equal(isPalindrome('Ogo'), true);
    });

    it('should function isPalindrome equal false', () => {
        // assert.equal(isPalindrome('TEst'), false);
        expect(isPalindrome('TEst')).false;   // chai syntax
    });


    it('should function isPalindrome work correctly', () => {
        assert.equal(isPalindrome("ADdA"), true);
    });
});


describe('function sotrArrayUp', () => {
    it('should function sortArrayUp get correct result', () => {
        assert.deepEqual(sortArrayUp([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    });

    it('should function sortArrayUp get correct result', () => {
        assert.deepEqual(sortArrayUp([-123123, 6, 23, -342, 1, 80]), [-123123, -342, 1, 6, 23, 80])
    });

    it('should function sortArrayUp get correct result', () => {
        assert.deepEqual(sortArrayUp([10, -10, 12, -12, 1919, -8008]), [-8008, -12, -10, 10, 12, 1919]);
    });
});






