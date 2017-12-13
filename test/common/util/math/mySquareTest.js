const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js')

const num1 = 2;
const num2 = 4;
const str1 = '2';
describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') should return int equal to ' + num2, function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, num2);
        });

        it('toSquare(' + str1 + ') should return int equal to ' + num2, function() {
            let result = mySquare.toSquare(str1);
            assert.equal(result, num2);
        });

        it('toSquare(' + num1 + ') should return a number ', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    });

});