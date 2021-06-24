import {
    startOfMonth,
    startOfWeek,
    endOfMonth,
    endOfWeek,
    addDays,
    subDays,
    startOfDay,
    format,
    add,
    sub
} from 'date-fns'

export const weekGenerator = (start = new Date()) => {
    // get sunday of the first week
    let date = startOfWeek(startOfMonth(start))
    let dateMod
    if (format(date, 'dd') === '01') {
        dateMod = subDays(date, 7)
        dateMod = addDays(dateMod, 2)
    } else {
        dateMod = addDays(date, 2)
    }
    // add 2 days to sunday to get tuesday
    
    return () => {
        // create empty array of length 7 and push days from Tue to Mon
        const week = [...Array(7)].map((_, index) => addDays(dateMod, index))
        // get the last day of the week and add one day to get first day of next week
        dateMod = addDays(week[6], 1)
        return week
    }
}

export const monthGenerator = (start = new Date()) => {
    let month = []
    let date = start
    // get last day of the last pushed week in month array
    const lastDayOfRange = range => range[range.length - 1][6]
    return () => {
        const weekGen = weekGenerator(startOfMonth(date))
        // get end date of the regular calender which is saturday
        const endDate = startOfDay(endOfWeek(endOfMonth(date)))
        // add 2 days to get modified end date means monday
        const endDateMod = addDays(endDate, 2)
        month.push(weekGen())
        while(lastDayOfRange(month) < endDateMod) {
            month.push(weekGen())
        }
        return month
    }
}

export const getPrevMonth = (date = new Date()) => {
    // return same day of prev month
    return sub(date, {
        months: 1
    })
}

export const getNextMonth = (date = new Date()) => {
    // return same day of next month
    return add(date, {
        months: 1
    })
}
