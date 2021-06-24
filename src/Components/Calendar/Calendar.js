import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { format } from 'date-fns'
import Days from './Days/Days'
import Dates from './Dates/Dates'
import classes from './Calender.module.css'

const Calendar = () => {
    const showCalendar = useSelector(state => state.showCalendar)
    const selectedDate = useSelector(state => state.selectedDate)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'INIT'})
    }, [dispatch, selectedDate])

    const calendar = (
        <main className={classes.Calendar}>
            <header className={classes.Header}>
                <button onClick={() => dispatch({type: 'PREV_MONTH'})}>
                    <BiChevronLeft />
                </button>
                <h3>{format(selectedDate, "MMMM do ',' yyyy")}</h3>
                <button onClick={() => dispatch({type: 'NEXT_MONTH'})}>
                    <BiChevronRight />
                </button>
            </header>
            <Days />
            <Dates />
        </main>
    )

    return (
            <>
                {showCalendar && calendar}
            </>
    )
}

export default Calendar