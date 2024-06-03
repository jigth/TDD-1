class StatsCalculator {
    static getMinValue (list) {
        let minValue

        for (let el of list) {
            if (!minValue) {
                minValue = el
                continue
            }

            if (el < minValue) minValue = el
        }

        return minValue
    }

    static getMaxValue (list) {
        let maxValue

        for (let el of list) {
            if (!maxValue) {
                maxValue = el
                continue
            }

            if (el > maxValue) maxValue = el
        }

        return maxValue
    }

    static getCount (list) {
        return list.length
    }

    static getAverageValue (list) {
        let avgValue = 0

        for (let el of list) {
            avgValue += el
        }

        return avgValue / this.getCount(list)
    }
}

module.exports = {
    StatsCalculator,
}