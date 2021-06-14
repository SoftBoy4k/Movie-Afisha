import React, { Component } from 'react'

export default class MoviePoster extends Component {
    render() {
        const {id, name, img, price, priceVip, fromDate, toDate} = this.props;
        return (
            <div id = {id}>
                <img src={img} />
                <h4>{name}</h4>
                <p>c {fromDate} по {toDate}</p>
                <p>от {price}р. до {priceVip}р.</p>
            </div>
        )
    }
}
