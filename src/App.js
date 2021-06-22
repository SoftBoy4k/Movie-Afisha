import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import { MoviePage } from './Pages/MoviePage/MoviePage';
import { Switch, Route } from 'react-router-dom';



export default class App extends Component {
    render(){
        return (
            <>
                <Header />

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/movie/:movieName" component={MoviePage} />
                </Switch>
            </>
        );
    }
}