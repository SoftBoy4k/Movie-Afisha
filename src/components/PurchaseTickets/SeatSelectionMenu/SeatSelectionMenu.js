import React from 'react';
import { CinemaKalinina } from './CinemaHalls/CinemaKalinina';
import  { CinemaOctober }  from './CinemaHalls/CinemaOctober';
import { CinemaMir } from './CinemaHalls/CinemaMir';
import './Style/SeatSelectionMenu.scss';

export const SeatSelectionMenu = ({cinema, ...otherProps}) => {
    return (
        <div className="cinema">
            {cinema === 'kalinina' ? <CinemaKalinina {...otherProps} /> : 
            cinema === 'october' ? <CinemaOctober {...otherProps}/> : 
            <CinemaMir {...otherProps}/>}
        </div>
    )
}
