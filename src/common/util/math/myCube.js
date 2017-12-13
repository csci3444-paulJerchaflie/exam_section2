module.exports = {

    /**
     * @return number cube of inpNumber or NaN if invalid input
     */
    toCube: function(inpNumber) {

        num1 = NaN;
        // get num1
        if (typeof inpNumber === "number") {
            num1 = inpNumber;
        } else {
            num1 = Number(inpNumber);
        }

        return (num1 * num1 * num1);
    }
}