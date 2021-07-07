import React from 'react';
import { withRouter } from 'react-router-dom';
import './Cinemas.css'

const cinemas = ({history, kalinina, october, mir}) => {
    return (
        <>
            <div className="cinemas">
                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "им. Калинина"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {history.push(`/kalinina/${kalinina[0]}/purchaseTickets/seatSelection`)}}>{kalinina[0]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/kalinina/${kalinina[1]}/purchaseTickets/seatSelection`)}}>{kalinina[1]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/kalinina/${kalinina[2]}/purchaseTickets/seatSelection`)}}>{kalinina[2]}</button>
                    </div>    
                </div>

                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "Октябрь"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {history.push(`/october/${october[0]}/purchaseTickets/seatSelection`)}}>{october[0]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/october/${october[1]}/purchaseTickets/seatSelection`)}}>{october[1]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/october/${october[2]}/purchaseTickets/seatSelection`)}}>{october[2]}</button>
                    </div>    
                </div> 

                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "Мир"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {history.push(`/mir/${mir[0]}/purchaseTickets/seatSelection`)}}>{mir[0]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/mir/${mir[1]}/purchaseTickets/seatSelection`)}}>{mir[1]}</button>
                        <button className="cinema-btn" onClick={() => {history.push(`/mir/${mir[2]}/purchaseTickets/seatSelection`)}}>{mir[2]}</button>
                    </div>    
                </div>    
            </div>
        </>
    )
}

const Cinemas = withRouter(cinemas);
export {Cinemas}