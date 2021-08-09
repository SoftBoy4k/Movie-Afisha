import React, { Component } from 'react';
import { movies } from '../../store/moviesStore';
import { MoviePoster } from '../../components/MoviePoster/MoviePoster';
import ButtonForCalendar from '../../components/Calendar/ButtonForCalendar/ButtonForCalendar';
import './Style/MainPage.scss'

export default class MainPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: movies
        }
    }
    
    render() {
        return (
            <>
                <ButtonForCalendar /> 
                <div className="movie">
                    {this.state.movies.map(({id, ...otherProps}) => <MoviePoster key={id} {...otherProps}/>)}
                </div>
            </>
        )
    }
}
