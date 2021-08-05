import React from 'react';
import { withRouter } from 'react-router-dom';
import './MoviePoster.css'

const MvPoster = ({id, name, img, price, priceVip, fromDate, toDate, history, date}) => {
    return(
        <div className="movie-inner" id = {id} onClick={() => {history.push(`/movie/${name}/${date.join('.')}`)}}>
            <img className="movie-img" src={img} />
            <h4 className="movie-name movie-text" >{name}</h4>
            <p className="movie-date movie-text">c {fromDate} по {toDate}</p>
            <p className="movie-price movie-text">от {price}р. до {priceVip}р.</p>
        </div>
    )
}

const MoviePoster = withRouter(MvPoster);
export {MoviePoster}