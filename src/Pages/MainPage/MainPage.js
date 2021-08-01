import React, { Component } from 'react';
import {movies} from '../../store/moviesStore';
import {MoviePoster} from '../../components/MoviePoster/MoviePoster';
import {Calendar}  from '../../components/Calendar/Calendar'
import './MainPage.css'

export default class MainPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: movies,
        }
    }
    render() {
        return (
            <>
                <Calendar/>
                <div className="movie">
                    {this.state.movies.map(({id, ...otherProps}) => <MoviePoster key={id} {...otherProps}/>)}
                </div>
            </>
        )
    }
}
