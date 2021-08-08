import React from 'react';
import { withRouter } from 'react-router-dom';
import './Style/MoviePoster.scss'

const MvPoster = ({id, name, img, price, priceVip, fromDate, toDate, history}) => {
    return(
        <div className="movie-inner" id = {id} onClick={() => {history.push(`/movie/${name}`)}}>
            <img className="movie-img" src={img} />
            <h4 className="movie-text" >{name}</h4>
            <p className="movie-date movie-text">c {fromDate} по {toDate}</p>
            <p className="movie-price movie-text">от {price}р. до {priceVip}р.</p>
        </div>
    )
}

const MoviePoster = withRouter(MvPoster);
export {MoviePoster}