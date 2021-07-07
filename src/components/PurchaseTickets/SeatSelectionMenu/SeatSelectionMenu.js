import React from 'react';
import  CinemaKalinina  from './Kalinina/CinemaKalinina';
import  CinemaOctober  from './October/CinemaOctober';
import  CinemaMir  from './Mir/CinemaMir';
import './SeatSelectionMenu.css';

export const SeatSelectionMenu = ({cinema}) => {
    return (
        <div className="cinema">
            {cinema === 'kalinina' ? <CinemaKalinina/> : 
            cinema === 'october' ? <CinemaOctober/> : 
            <CinemaMir/>}
        </div>
    )
}
