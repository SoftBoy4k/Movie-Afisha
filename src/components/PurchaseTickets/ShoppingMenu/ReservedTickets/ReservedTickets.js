import React from 'react'
import cross from './cross.png'
import './Style/ResevedTickets.scss'

export const ReservedTickets = ({placeTickets, numTickets, ClickHandlerRemove, price}) => {
    return (
        <>
            <hr/>
            <div className="tickets" data-place={`${placeTickets[0]}.${placeTickets[1]}`}>
                <p className="tickets__num">{numTickets}</p>
                <div className="tickets__content">
                    <p>Стандартный билет</p>
                    <p>Ряд: {placeTickets[1]}, место: {placeTickets[0]}</p>
                    <p>Стоимость: {price}р.</p>
                </div>
                <img className="tickets__img" src={cross} data-place={`${placeTickets[0]}.${placeTickets[1]}`} data-price={price} onClick={ClickHandlerRemove}/>
            </div>
        </>
    )
}
