import React from 'react';
import { withRouter } from 'react-router-dom';

const MvPoster = ({id, name, img, price, priceVip, fromDate, toDate, history}) => {
    return(
        <div id = {id} onClick={() => {
            history.push(`/${name}`)
        }}>
            <img src={img} />
            <h4>{name}</h4>
            <p>c {fromDate} по {toDate}</p>
            <p>от {price}р. до {priceVip}р.</p>
        </div>
    )
}

const MoviePoster = withRouter(MvPoster);
export {MoviePoster}