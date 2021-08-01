import React from 'react';
import { CinemaKalinina } from './Cinemas/CinemaKalinina';
import  { CinemaOctober }  from './Cinemas/CinemaOctober';
import { CinemaMir } from './Cinemas/CinemaMir';
import './SeatSelectionMenu.css';

export const SeatSelectionMenu = ({cinema, ...otherProps}) => {
    return (
        <div className="cinema">
            {cinema === 'kalinina' ? <CinemaKalinina {...otherProps} /> : 
            cinema === 'october' ? <CinemaOctober {...otherProps}/> : 
            <CinemaMir {...otherProps}/>}
        </div>
    )
}
