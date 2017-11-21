module.exports = {

    /**
     * @return number cube of inpNumber or NaN if invalid input
     */
    toCube: function(inpNumber) {

        num1 = NaN;
        // get num1
        if (typeof inpNumber === "number") {
            num1 = inpNumber;
        } else if (typeof inpNumber1 === "string" && Number(inpNumber1) === "number") {
            num1 = Number(inpNumber1);
        }

        return Math.pow(num1, 3);
    }
}