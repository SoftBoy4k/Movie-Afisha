import React, { Component } from 'react';
import MoviesStore from '../store/moviesStore';

export default class MainPage extends Component {
    render() {
        return (
            <MoviesStore/>
        )
    }
}
