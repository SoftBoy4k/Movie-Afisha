import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeTime } from '../../redux/actions';
import './Cinemas.css'

const cinemas = ({history, kalinina, october, mir, movieName, changeTime}) => {
    
    const ClickHandler = (cinema, time) => {
        history.push(`/${movieName}/${cinema}/purchaseTickets/seatSelection`);
        changeTime(time)
    }

    return (
        <>
            <div className="cinemas">
                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "им. Калинина"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {ClickHandler('kalinina', kalinina[0])}}>{kalinina[0]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('kalinina', kalinina[1])}}>{kalinina[1]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('kalinina', kalinina[2])}}>{kalinina[2]}</button>
                    </div>    
                </div>

                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "Октябрь"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {ClickHandler('october', october[0])}}>{october[0]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('october', october[1])}}>{october[1]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('october', october[2])}}>{october[2]}</button>
                    </div>    
                </div> 

                <div className="cinemas-content">
                    <p className="cinema-name">Кинотеатр "Мир"</p>
                    <div className="cinema-btns">
                        <button className="cinema-btn" onClick={() => {ClickHandler('mir', mir[0])}}>{mir[0]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('mir', mir[1])}}>{mir[1]}</button>
                        <button className="cinema-btn" onClick={() => {ClickHandler('mir', mir[2])}}>{mir[2]}</button>
                    </div>    
                </div>    
            </div>
        </>
    )
}

const mapDispatchToProps = {
    changeTime
}

const Cinemas = withRouter(cinemas);
export default connect(null, mapDispatchToProps)(Cinemas)