import React, { Component } from 'react';
import {movies} from '../store/moviesStore';
import {MoviePoster} from '../components/MoviePoster';

export default class MainPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            movies: movies,
        }
    }
    render() {
        return (
            <div>
                {this.state.movies.map(({id, ...otherProps}) => <MoviePoster key={id} {...otherProps}/>)}
            </div>
        )
    }
}
