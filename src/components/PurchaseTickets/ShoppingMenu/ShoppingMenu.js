import React from 'react'
import CardForm from '../../CardForm/CardForm'
import { ReservedTickets } from './ReservedTickets/ReservedTickets'
import './ShoppingMenu.css'

export const ShoppingMenu = ({name, activeNum, totalPrice, time, ClickHandler, price}) => {

    const ClickHandlerRemove = (e) => {
        activeNum.splice(activeNum.indexOf(e.target.parentElement.dataset.place), 1)
    }

    return (
        <div className="shopping-menu__wrapper">
            <div className="shopping-menu__header-text">
                <p onClick={ClickHandlerRemove}>{name}</p>
                <p>30.07.21</p>
                <p>{time}</p>
            </div>
            {activeNum.map((str, i) => <ReservedTickets ClickHandlerRemove={ClickHandler} price={price}placeTickets={str.split('.')} numTickets={++i}/>)}
            <hr/>
            <p className="shopping-menu__total-price">Итого: {totalPrice}</p>
            <CardForm/>
        </div>
    )
}
