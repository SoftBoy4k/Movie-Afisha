import React, { Component } from 'react'
import { BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import MainPage from '../Pages/mainPage';
import MoviePage from '../Pages/moviePage';
import PurchasePage from '../Pages/purchasePage';


export default class AppRouting extends Component {
    render() {
        return (
            <Router>

                <nav>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/movie">Movie</NavLink>
                    <NavLink to="/purchase">Purchase</NavLink>
                </nav>

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/movie" component={MoviePage} />
                    <Route path="/purchase" component={PurchasePage} />
                </Switch>
            </Router>
        )
    }
}
