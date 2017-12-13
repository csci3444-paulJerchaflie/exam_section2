const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube.js')

const num1 = 2;
const num2 = 8;
const str1 = '2';
describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') should return int equal to ' + num2, function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num2);
        });

        it('toCube(' + str1 + ') should return int equal to ' + num2, function() {
            let result = myCube.toCube(str1);
            assert.equal(result, num2);
        });

        it('toCube(' + num1 + ') should return a number ', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });

    });
});