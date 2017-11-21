require('myCube');
require('mySquare');

module.exports = {
    /**
     * @return number returns inpNumber1 to power of inpNumber 2
     */
    toPower: function(inpNumber1, inpNumber2) {
        num1 = NaN;
        num2 = NaN;
        // get num1
        if (typeof inpNumber1 === "number") {
            num1 = inpNumber1;
        } else if (typeof inpNumber1 === "string" && Number(inpNumber1) === "number") {
            num1 = Number(inpNumber1);
        }

        // get num2
        if (typeof inpNumber2 === "number") {
            num2 = inpNumber2;
        } else if (typeof inpNumber2 === "string" && Number(inpNumber2) === "number") {
            num2 = Number(inpNumber2);
        }

        if (num2 == 2) {
            console.log('Calling toSquare from toPower function');
            return toSquare(inpNumber1);
        } else if (num2 == 3) {
            console.log('Calling toCube from toPower function');
            return toCube(inpNumber1);
        } else
            return Math.pow(num1, num2);

    }

}