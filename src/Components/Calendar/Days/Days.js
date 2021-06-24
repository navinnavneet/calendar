import classes from './Days.module.css'

const Days = () => {
    const daysArr = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']

    const days = daysArr.map((day, index) => {
        return <Day key={index} day={day} />
    })

    return (
        <div className={classes.Days}>
            {days}
        </div>
    )
}

export const Day = ({ day }) => {
    return (
        <div className={classes.Day}>
            <p>{day}</p>
        </div>
    )
}

export default Days;