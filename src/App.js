import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import { MoviePage } from './Pages/MoviePage/MoviePage';
import { Switch, Route } from 'react-router-dom';
import { TicketPurchasePage } from './Pages/TicketPurchasePage/TicketPurchasePage';



export default class App extends Component {
    render(){
        return (
            <>
                <Header />

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/movie/:movieName" component={MoviePage} />
                    <Route path="/:cinema/:time/purchaseTickets/seatSelection" component={TicketPurchasePage} />
                    <Route path="/:cinema/:time/purchaseTickets/payment" component={TicketPurchasePage} />
                </Switch>
            </>
        );
    }
}