import { useSelector, useDispatch } from 'react-redux'
import { format, isSameMonth, isSameDay } from 'date-fns'
import './Dates.css'

const Dates = () => {
    const selectedDate = useSelector(state => state.selectedDate) 
    const data = useSelector(state => state.selectedMonth)
    const dispatch = useDispatch()    

    return (
        <>
            {data.map((week, index) => (
                <div key={index} className='Week'>
                    {week.map((day, i) => {
                        const colorClass = isSameMonth(day, selectedDate) ? 'ColorSame' : 'ColorDifferent'
                        const selected = isSameDay(day, selectedDate) && 'SelectedDay'
                        const sunday = (i === 5) && 'Sunday'
                        return (
                            <div 
                                key={i} 
                                className={`Day ${colorClass} ${selected} ${sunday}`}
                                onClick={() => dispatch({type: 'SELECT_DAY', payload : day})}>
                                    <h3>{format(day, 'dd')}</h3>
                            </div>
                        )
                    })}
                </div>
            ))}
        </>
    )
}

export default Dates