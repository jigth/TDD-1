class StatsCalculator {
    getMinValue (list) {
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

    getMaxValue (list) {
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

    getCount (list) {
        return list.length
    }
}

module.exports = {
    StatsCalculator,
}