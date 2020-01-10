const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isPalindrome, sortArrayUp} = require('../index.js');


describe('function sum', () => {
    it('should function sum equal 10', () => {
        expect(sum(2, 8)).equal(10);
    });

    it('should function sum equal -1', () => {
        // assert.equal(sum(-1, 1), 0);
        expect(sum(-1, 0)).equal(-1);
    });

    it('should function sum not equal 0', () => {
        // assert.notEqual(sum(0, -1), 0);
        expect(sum(0, -1)).not.equal(0);
    });

    it('should function sum accept one argument', () => {
        // assert.equal(sum(), 0);
        expect(sum(1)).equal(1);
    });
    it('should function sum return 0 without any arguments', () => {
        // assert.equal(sum(), 0);
        expect(sum()).equal(0);
    });
});


describe('function mult', () => {
    it('should function mult equal 0 without input arguments', () => {
        expect(mult()).equal(0);
    });

    it('should function mult equal 0 with one argument passed in', () => {
        expect(mult(2)).equal(0);
    });

    it('should function mult not equal 200', () => {
        // assert.notEqual(mult(2,4), 9);
        expect(mult(2, 10)).not.equal(200);
    });

    it('shoud function mult not equal 10', () => {
        expect(mult(3, 3)).not.equal(10);
    });
});


describe('function isPalindrome', () => {
    it('should function isPalindrome equal true', () => {
        expect(isPalindrome('a')).true;
    });

    it('should function isPalindrome equal false', () => {
        expect(isPalindrome('TEst')).false;
    });

    it('should function isPalindrome work correctly', () => {
        expect(isPalindrome('')).true;
    });

    it('should function isPalindrome equal true witout any arguments', () => {
        expect(isPalindrome()).true;
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
    // it('shold'), ()


});









