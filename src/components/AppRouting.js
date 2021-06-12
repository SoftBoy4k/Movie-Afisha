import React, { Component } from 'react'
import { BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import mainPage from '../Pages/mainPage';
import moviePage from '../Pages/moviePage';
import purchasePage from '../Pages/purchasePage';


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
                    <Route path="/" component={mainPage} exact />
                    <Route path="/movie" component={moviePage} />
                    <Route path="/purchase" component={purchasePage} />
                </Switch>
            </Router>
        )
    }
}
