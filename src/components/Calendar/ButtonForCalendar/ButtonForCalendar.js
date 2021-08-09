import React, { Component } from 'react'
import Calendar from '../index'
import calendarImg from "./calendar.png"
import './Style/ButtonForCalendar.scss'

export default class ButtonForCalendar extends Component {
    constructor(props){
        super(props)

        this.state = {
            date: new Date(),
            isVisibleCalendar: false
        }
    }

    
    handleDateChange = date => this.setState({ date });

    HandlerClick = () => this.setState({isVisibleCalendar: !this.state.isVisibleCalendar})

    render() {
        const { date } = this.state
        return (
            <>
                <button className="btn-calendar" onClick={this.HandlerClick}/>
                {this.state.isVisibleCalendar
                    ? <div className="calendar">
                        {date && <p>Выбранная дата: {date.toLocaleDateString()}</p>}
                        <Calendar onChange={this.handleDateChange}/>
                    </div>
                    : undefined
                } 
            </> 
        )
    }
}
