import React from 'react';
import './CardDay.css'

export const CardDay = ({day, date, month}) => {
    return (
        <div className="card-day">
            <p className="day card-day__component">{day}</p>
            <p className="date card-day__component">{date}</p>
            <p className="month card-day__component">{month}</p>
        </div>
    )
}
