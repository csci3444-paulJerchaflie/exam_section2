module.exports = {

    /**
     * @return number square of inpNumber or NaN if invalid input
     */
    toSquare: function(inpNumber) {

        num1 = NaN;
        // get num1
        if (typeof inpNumber === "number") {
            num1 = inpNumber;
        } else {
            num1 = Number(inpNumber);
        }

        return num1 * num1;
    }
}