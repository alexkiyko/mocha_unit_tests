const { expect } = require('chai');
const {
  sum,
  mult,
  isPalindrome,
  sortArrayUp,
  oddOrEven,
  makeUpperCase,
  reversedString,
  oppositeValue,
  typeOfSum,
  stringClean,
  removeDuplicates
} = require('../index.js');




describe('function sum', () => {

  it('should sum 2 and 8 equal 10', () => {
    expect(sum(2, 8)).equal(10);
  });

  it('should sum -1 and 0 equal -1', () => {
    expect(sum(-1, 0)).equal(-1);
  });

  it('should sum 0 and -1 not equal 0', () => {
    expect(sum(0, -1)).not.equal(0);
  });

  it('should accept one argument 1 and return 1', () => {
    expect(sum(1)).equal(1);
  });

  it('should equal 0 by default', () => {
    expect(sum()).equal(0);
  });

  it('should return type number', () => {
    expect(typeof sum(1, 1)).equal('number');
  });
});



describe('function mult', () => {

  it('should mult negative int', () => {
    expect(mult(-1, 1)).equal(-1);
  });

  it('should mult decimal numbers', () => {
    expect(mult(2.5, 2.5)).equal(6.25);
  });

  it('should mult 2 and 10 not equal 200', () => {
    expect(mult(2, 10)).not.equal(200);
  });

  it('should mult 3 and 3 equal 9', () => {
    expect(mult(3, 3)).equal(9);
  });
});



describe('function isPalindrome', () => {

  it('should palindrome of "a" equal true', () => {
    expect(isPalindrome('a')).true;
  });

  it('should palindrome of "TEst" equal false', () => {
    expect(isPalindrome('TEst')).false;
  });

  it('should palindrome of "racecar" equal true', () => {
    expect(isPalindrome('racecar')).true;
  });
});



describe('function sortArrayUp', () => {

  it('should sort positive numbers', () => {
    expect(sortArrayUp([5, 4, 3, 2, 1])).deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort negative numbers', () => {
    expect(sortArrayUp([-123123, -6, -23, -342, 1, -80])).deep.equal([-123123, -342, -80, -23, -6, 1]);
  });

  it('should sort positive and negative numbers', () => {
    expect(sortArrayUp([101, -1, 10, -23, 56, -86])).deep.equal([-86, -23, -1, 10, 56, 101]);
  });

  it('should return empty array by default', () => {
    expect(sortArrayUp()).deep.equal([]);
  });
});



describe('function oddOrEven', () => {

  it('should 12 equal even', () => {
    expect(oddOrEven(12)).equal('Even');
  });

  it('should 99 equal odd', () => {
    expect(oddOrEven(99)).equal('Odd');
  });

  it('should 1 not equal even', () => {
    expect(oddOrEven(1)).not.equal('Even');
  });

  it('should - 1 not equal even', () => {
    expect(oddOrEven(-1)).equal('Odd');
  });
});



describe('function makeUpperCase', () => {

  it('should equal "STRING"', () => {
    expect(makeUpperCase('string')).equal('STRING');
  });

  it('should equal "CODEWARS"', () => {
    expect(makeUpperCase('CodeWars')).equal('CODEWARS');
  });

  it('should ignore numbers and symbols', () => {
    expect(makeUpperCase('!@#123')).equal('!@#123');
  });
});



describe('function reversedString', () => {

  it('should string equal "gnirts"', () => {
    expect(reversedString('string')).equal('gnirts');
  });

  it('should 123 not equal 123', () => {
    expect(reversedString('123')).not.equal('123');
  });

  it('should equal empty string', () => {
    expect(reversedString('')).equal('');
  });
});



describe('function oppositeValue', () => {

  it('should -1 equal 1', () => {
    expect(oppositeValue(1)).equal(-1);
  });

  it('should -100 equal 100', () => {
    expect(oppositeValue(-100)).equal(100);
  });

  it('should 10 not equal -100', () => {
    expect(oppositeValue(10)).not.equal(-100);
  });

  it('should equal 0 by default', () => {
    expect(oppositeValue()).equal(0);
  });
});



describe('function typeOfSum', () => {

  it('should equal type string', () => {
    expect(typeOfSum(1,'a')).equal('string');
  });

  it('should equal type number', () => {
    expect(typeOfSum(10, 10)).equal('number');
  });

  it('should equal type number', () => {
    expect(typeOfSum(null, 15)).equal('number');
  });

  it('should equal type number', () => {
    expect(typeOfSum(null, undefined)).equal('number');
  });

  it('should return type string', () => {
    expect(typeOfSum('a', false)).equal('string');
  });
});



describe('function stringClean', () => {

  it('should remove numbers from string', () => {
    expect(stringClean('123string321')).equal('string');
  });

  it('should remove numbers from string and keep symbols', () => {
    expect(stringClean('1Hel4lo!!!')).equal('Hello!!!');
  });

  it('should remove numbers and return empty string', () => {
    expect(stringClean('124124')).equal('');
  });
});



describe('function removeDuplicates', () => {

  it('should remove positive int duplicates',() => {
    expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 7, 7])).deep.eq([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should remove negative int duplicates',() => {
    expect(removeDuplicates([-10, -12, -1, -10, -12, -13])).deep.eq([-10, -12, -1, -13]);
  });

  it('should remove letters duplicated', () => {
    expect(removeDuplicates(['a', 'b', 'c', 'a', 'd'])).deep.eq(['a', 'b', 'c', 'd'])
  });

  it('should remove symbols duplicated', () => {
    expect(removeDuplicates(['!', '?', '$', '&', '!'])).deep.eq(['!', '?', '$', '&'])
  });
});
