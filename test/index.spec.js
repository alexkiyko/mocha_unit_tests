const assert = require('assert');
const {expect} = require('chai');

const {sum, mult, isPalindrome, sortArrayUp, oddOrEven, makeUpperCase} = require('../index.js');


describe('function sum', () => {
    it('should function sum equal 10', () => {
        expect(sum(2, 8)).equal(10);
    });

    it('should function sum equal -1', () => {
        expect(sum(-1, 0)).equal(-1);
    });

    it('should function sum not equal 0', () => {
        expect(sum(0, -1)).not.equal(0);
    });

    it('should function sum accept one argument', () => {
        expect(sum(1)).equal(1);
    });

    it('should function sum return 0 without any arguments', () => {
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
        expect(mult(2, 10)).not.equal(200);
    });

    it('shoud function mult equal 9', () => {
        expect(mult(3, 3)).equal(9);
    });
});


describe('function isPalindrome', () => {
    it('should function isPalindrome equal true', () => {
        expect(isPalindrome('a')).true;
    });

    it('should function isPalindrome equal false', () => {
        expect(isPalindrome('TEst')).false;
    });

    it('should function isPalindrome equal true with empty string input', () => {
        expect(isPalindrome('')).true;
    });
});


describe('function sotrArrayUp', () => {
    it('should function sortArrayUp sort positive numbers', () => {
        expect(sortArrayUp([5, 4, 3, 2, 1])).deep.equal([1, 2, 3, 4, 5]);
    });

    it('should function sortArrayUp sort negative numbers', () => {
        expect(sortArrayUp([-123123, -6, -23, -342, 1, -80])).deep.equal([-123123, -342, -80, -23, -6, 1]);

    });

    it('should function sortArrayUp return empty array', () => {
        expect(sortArrayUp()).deep.equal([]);
    });
});


describe('function oddOrEven', () => {
    it ('should 12 equal even expect true', () => {
       expect(oddOrEven(12)).true;
    });

    it ('should 99 equal odd expect false', () => {
        expect(oddOrEven(99)).false;
    });

    it ('empty input expect false', () => {
        expect(oddOrEven()).false;
    });
});



describe('functio makeUpperCase', () => {
    it('should return input string upper case expect STRING', () => {
        expect(makeUpperCase('string')).eq('STRING');
    });

    it('should eqaul empty string with no args passed in ', () => {
        expect(makeUpperCase()).eq('');
    });

});











