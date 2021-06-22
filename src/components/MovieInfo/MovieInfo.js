import React from 'react';
import './MovieInfo.css'

export const MovieInfo = ({name, img, price, priceVip, fromDate, toDate, duration, ageRestrictions, genre}) => {
    return (
        <>
            <h2 className='movie-info__name'>{name}</h2>
            <div className="movie-info">
                <img src={img} className='movie-info__img'/>

                <div className="movie-info__text-content">
                    <div className='categories content'>
                        <p className="movie-info__text">Дата показа:</p>
                        <p className="movie-info__text">Длительность:</p>
                        <p className="movie-info__text">Жанр:</p>
                        <p className="movie-info__text">Стоимость:</p>
                        <p className="movie-info__text">Возрастные ограничения:</p>
                    </div>

                    <div className='value content'>
                        <p className="movie-info__text">{fromDate} - {toDate}</p>
                        <p className="movie-info__text">{duration}мин.</p>
                        <p className="movie-info__text">{genre}</p>
                        <p className="movie-info__text">{price}р. - {priceVip}р.</p>
                        <p className="movie-info__text">+{ageRestrictions}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
