import React, { Component } from 'react';
import {movies} from '../../store/moviesStore';
import {MoviePoster} from '../../components/MoviePoster/MoviePoster';
import Calendar  from '../../components/Calendar/index'
import './MainPage.css'

export default class MainPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: movies,
            date: new Date()
        }
    }

    handleDateChange = date => this.setState({ date });

    render() {
        const { date } = this.state;
        return (
            <>
                <div className="calendar">
                    {date ? <p>Выбранная дата: {date.toLocaleDateString()}</p> : <p>Выберите дату:</p>}
                    <Calendar onChange={this.handleDateChange}/>
                </div>
                <div className="movie">
                    {this.state.movies.map(({id, ...otherProps}) => <MoviePoster key={id} {...otherProps}/>)}
                </div>
            </>
        )
    }
}
