import { SeatSelectionMenu } from './SeatSelectionMenu/SeatSelectionMenu'
import React from 'react';
import { withRouter } from 'react-router-dom';
import './PurchaseTickets.css';

export const PurchTickets = ({history, match: {url, params:{time, cinema}}}) => {
    console.log(time)
    return (
        <>
            <div className="purchase-tickets">
                <div className="purchase-tickets-btns">
                    <button 
                        className={
                            url === `/${cinema}/${time}/purchaseTickets/seatSelection` ? 
                            "purchase-tickets__btn active" : 
                            "purchase-tickets__btn"
                        } 
                        onClick={
                            () => {history.push(`/${cinema}/${time}/purchaseTickets/seatSelection`)}
                        }>
                            Выбор места
                    </button>

                    <button 
                        className={ 
                            url === `/${cinema}/${time}/purchaseTickets/payment` ? 
                            "purchase-tickets__btn active" : 
                            "purchase-tickets__btn"
                        } 
                        onClick={
                            () => {history.push(`/${cinema}/${time}/purchaseTickets/payment`)}
                        }>       
                            Оплата
                    </button>
                </div>
                <SeatSelectionMenu cinema = {cinema}/>
            </div>
        </>

    )
}

const PurchaseTickets = withRouter(PurchTickets);
export {PurchaseTickets}