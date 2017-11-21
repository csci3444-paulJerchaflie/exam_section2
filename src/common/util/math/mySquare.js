module.exports = {

    /**
     * @return number square of inpNumber or NaN if invalid input
     */
    toSquare: function(inpNumber) {

        num1 = NaN;
        // get num1
        if (typeof inpNumber === "number") {
            num1 = inpNumber;
        } else if (typeof inpNumber1 === "string" && Number(inpNumber1) === "number") {
            num1 = Number(inpNumber1);
        }

        return num1 * num1;
    }
}