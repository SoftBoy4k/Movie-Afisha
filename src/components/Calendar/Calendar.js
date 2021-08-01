import React from 'react';
import { CardDay } from './CardDay/CardDay';
import './Calendar.css'
import leftArrow from './imgForCalendar/left-arrow.png'
import rightArrow from './imgForCalendar/right-arrow.png'

function creatingDate (n=0) {
    const dateToday = new Date();
    const arrDate = [];
    for(let i = 0; i < n; i++){
        let day = whatDay(dateToday.getDay() + i);
        let date = dateToday.getDate() + i; 
        let month = whatMonth(dateToday.getMonth());
        arrDate.push([day, date, month[0]])
    }
    return arrDate;
}

function whatDay (day) {
    day = ++day;
    const DAY = day <= 7 ? day : day % 7 === 0 ? 7 : day % 7;
    switch (DAY) {
        case 1: return "Вс";
        case 2: return "Пн";
        case 3: return "Вт";
        case 4: return "Ср";
        case 5: return "Чт";
        case 6: return "Пт";
        case 7: return "Сб";  
    }
}

function whatMonth (month) {
    switch (month) {
        case 0: return ["Январь", 31];
        case 1: return ["Февраль", 28];
        case 2: return ["Март", 31];
        case 3: return ["Апрель", 30];
        case 4: return ["Май", 31];
        case 5: return ["Июнь", 30];
        case 6: return ["Июль", 31];
        case 7: return ["Август", 31];
        case 8: return ["Сентябрь", 30];
        case 9: return ["Октябрь", 31];
        case 10: return ["Ноябрь", 30];
        case 11: return ["Декабрь", 31];
    }
}

export const Calendar = () => {
    return (
        <div className="calendar">
            <img className="left-arrow arrow" src={leftArrow}/>
            <div className="card-day__wrapper">
                {creatingDate(11).map((arr, id) => <CardDay id={id} day={arr[0]} date={arr[1]} month={arr[2]}/>)}
            </div>
            <img className="right-arrow arrow" src={rightArrow}/>
        </div>
    )
}