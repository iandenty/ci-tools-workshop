export default class Utils {
    /**
     * Sums all parameters
     *
     * @param {...Numbers} ...numbers
     *
     * @return {Number}
     */
    sum(...numbers) {
        let sum = [...numbers]
            .filter(number => !isNaN(number))
            .reduce((prev, curr) => prev + curr, 0);

        if (sum.length === 0) {
            return 0;
        }

        return sum;
    }
}
