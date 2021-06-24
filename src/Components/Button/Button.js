import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Button.module.css'

const Button = () => {
    const showCalendar = useSelector(state => state.showCalendar)
    const dispatch = useDispatch()
    let btnText = showCalendar ? 'hide calendar' : 'show calendar'
    return (
        <button 
            onClick={() => dispatch({type: 'TOGGLE_CALENDAR'})} 
            className={classes.Button}>
                {btnText}
        </button>
    )
}

export default Button