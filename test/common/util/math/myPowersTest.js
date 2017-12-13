const assert = require('chai').assert;
const myPowers = require('../../../../src/common/util/math/myPowers');

const num1 = 2;
const num2 = 8;
const num3 = 4;
const str1 = '2';

describe('myPowers', function() {
    describe('myPowers.toCube', function() {
        it('myPowers.toCube(' + num1 + ') should return int equal to ' + num2, function() {
            let result = myPowers.toCube(num1);
            assert.equal(result, num2);
        });

        it('myPowers.toCube(' + str1 + ') should return int equal to ' + num2, function() {
            let result = myPowers.toCube(str1);
            assert.equal(result, num2);
        });

        it('myPowers.toCube(' + num1 + ') should return a number ', function() {
            let result = myPowers.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });

    describe('myPowers.toSquare', function() {
        it('myPowers.toSquare(' + num1 + ') should return int equal to ' + num2, function() {
            let result = myPowers.toSquare(num1);
            assert.equal(result, num3);
        });

        it('myPowers.toSquare(' + str1 + ') should return int equal to ' + num2, function() {
            let result = myPowers.toSquare(str1);
            assert.equal(result, num3);
        });

        it('myPowers.toSquare(' + num1 + ') should return a number ', function() {
            let result = myPowers.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });

});