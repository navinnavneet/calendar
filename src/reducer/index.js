import { monthGenerator, getPrevMonth, getNextMonth } from "../utility"

const initialState = {
    showCalendar: false,
    selectedDate: new Date(),
    selectedMonth: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT': 
            return {
                ...state,
                selectedMonth: monthGenerator(state.selectedDate)(state.selectedDate)
            }
        case 'TOGGLE_CALENDAR':
            const show = ! state.showCalendar
            return {
                ...state,
                showCalendar: show
            }
        case 'SELECT_DAY':
            return {
                ...state,
                selectedDate: action.payload
            }
        case 'NEXT_MONTH':
            const selectedDateMod = getNextMonth(state.selectedDate)
            monthGenerator(selectedDateMod)()
            return {
                ...state,
                selectedDate: selectedDateMod
            }
        case 'PREV_MONTH':
            const selectedDateModified = getPrevMonth(state.selectedDate)
            monthGenerator(selectedDateModified)()
            return {
                ...state,
                selectedDate: selectedDateModified
            }
        default: 
            return state
    }
}

export default reducer