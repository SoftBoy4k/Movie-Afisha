import React from 'react';
import './Cinemas.css'

export const Cinemas = () => {
    return (
        <div className="cinemas">
            <div className="cinemas-content">
                <p className="cinema-name">Кинотеатр "им. Калинина"</p>
                <div className="cinema-btns">
                    <button className="cinema-btn">10.40</button>
                    <button className="cinema-btn">13.20</button>
                    <button className="cinema-btn">16.35</button>
                </div>    
            </div>

            <div className="cinemas-content">
                <p className="cinema-name">Кинотеатр "Октябрь"</p>
                <div className="cinema-btns">
                    <button className="cinema-btn">10.40</button>
                    <button className="cinema-btn">13.20</button>
                    <button className="cinema-btn">16.35</button>
                </div>    
            </div> 

            <div className="cinemas-content">
                <p className="cinema-name">Кинотеатр "Мир"</p>
                <div className="cinema-btns">
                    <button className="cinema-btn">10.40</button>
                    <button className="cinema-btn">13.20</button>
                    <button className="cinema-btn">16.35</button>
                </div>    
            </div>    
        </div>
    )
}
