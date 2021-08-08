import React from 'react';
import { PurchaseTickets } from '../../components/PurchaseTickets/PurchaseTickets';
import './Style/TicketPurchasePage.scss'

export const TicketPurchasePage = () => {
    return (
        <>
            <h2 className="header-text__ticket-purchase-page">Покупка билетов</h2>
            <PurchaseTickets/>
        </>
    )
}