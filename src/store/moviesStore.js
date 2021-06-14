import React, { Component } from 'react'
import MoviePoster from '../components/MoviePoster'

export default class MoviesStore extends Component {
    constructor(props){
        super(props)
        this.movies = [
            {id: 1,
                name: "Тихое место 2",
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16,
                genre: "Анимация",
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/9hP8dVHet.jpg"
            },
            {id: 2,
                name: "Круэлла",
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16, 
                genre: "Анимация",
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/6KXE61nt7.jpg"
            },
            {id: 3,
                name: "Форсаж 9",
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16,
                genre: "Анимация", 
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/9AnPNev5V.jpg"
            },
            {id: 4,
                name: 'Истребитель демонов: поезд "Бесконечный"',
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16,
                genre: "Анимация", 
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/3sWBuGCGv.jpg"
            },
            {id: 5,
                name: "Мейнстрим",
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16,
                genre: "Анимация",  
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/5fPf05f7R.jpg"
            },
            {id: 6,
                name: "Смешарики и друзья в кино. Выпуск 1",
                price: 6.50, 
                priceVip: 13, 
                fromDate: "1 июля", 
                toDate: "20 июля",
                duration: 120,
                ageRestrictions: 16,
                genre: "Анимация", 
                img: "https://abws.bycard.by/uploads/events/thumbs/300x430/5z7WutP5x.jpg"
            }
        ]
    }

    render() {
        return (
            <>
                <div>
                    {this.movies.map((elem) => <MoviePoster key={elem.id} id={elem.id} name={elem.name} img={elem.img} price={elem.price} priceVip={elem.priceVip} fromDate={elem.fromDate} toDate={elem.toDate} />)}
                </div>
            </>
        )
    }
}
