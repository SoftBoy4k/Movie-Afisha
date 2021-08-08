import React, { Component } from 'react'
import { SeatSelectionMenu } from './SeatSelectionMenu/SeatSelectionMenu';
import ShoppingMenu from './ShoppingMenu/ShoppingMenu'
import { withRouter } from 'react-router-dom';
import { movies } from '../../store/moviesStore';
import './Style/PurchaseTickets.scss';

export default class PurchTickets extends Component {
    state = {
        activeNum: [],
        totalPrice: 0,
        priceList: []
    }

    ClickHandler = (e) => {
        let {activeNum} = this.state;
        const elemNum = e.target.dataset.place;
        !activeNum.includes(elemNum) && activeNum.length < 5 ? this.ChoicePlace(activeNum, elemNum, e) : this.CancelPlace(activeNum, elemNum, e);
    }

    ChoicePlace = (activeNum, elemNum, e) => {
        this.setState(() => {
            return (
                activeNum = activeNum.push(elemNum),
                this.state.priceList.push(e.target.dataset.price),
                this.state.totalPrice = this.state.totalPrice + +e.target.dataset.price
            )
        }) 
    }

    CancelPlace = (activeNum, elemNum, e) => {
        this.setState(({priceList}) => {
            return(
                activeNum.splice(activeNum.indexOf(elemNum), 1),
                priceList.splice(priceList.indexOf(e.target.dataset.price), 1),
                this.state.totalPrice = this.state.totalPrice - +e.target.dataset.price
            )
        }) 
    }

    CheckPrice = (movieName) => {
        return movies.find(({name}) => name === movieName)
    }

    render() {
        const {history, match: {url, params:{cinema, movieName}}} = this.props; 
        return (
            <div className="purchase-tickets">
                <div className="purchase-tickets-btns">
                    <button 
                        className={
                            url === `/${movieName}/${cinema}/purchaseTickets/seatSelection` ? 
                            "purchase-tickets__btn active" : 
                            "purchase-tickets__btn"
                        } 
                        onClick={
                            () => {history.push(`/${movieName}/${cinema}/purchaseTickets/seatSelection`)}
                        }>
                            Выбор места
                    </button>

                    <button 
                        className={ 
                            url === `/${movieName}/${cinema}/purchaseTickets/payment` ? 
                            "purchase-tickets__btn active" : 
                            "purchase-tickets__btn"
                        } 
                        onClick={
                            () => {history.push(`/${movieName}/${cinema}/purchaseTickets/payment`)}
                        }>       
                            Оплата
                    </button>
                </div>
                {url === `/${movieName}/${cinema}/purchaseTickets/seatSelection` ? 
                    <SeatSelectionMenu cinema = {cinema} price={this.CheckPrice(movieName).price} activeNum = {this.state.activeNum} totalPrice = {this.state.totalPrice} ClickHandler = {this.ClickHandler}/> : 
                    <ShoppingMenu name={movieName} price={this.CheckPrice(movieName).price} activeNum = {this.state.activeNum} totalPrice = {this.state.totalPrice} ClickHandler = {this.ClickHandler}/>
                }
            </div>
        )
    }
}

const PurchaseTickets = withRouter(PurchTickets);
export {PurchaseTickets}