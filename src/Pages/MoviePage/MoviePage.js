import React from 'react';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { movies } from '../../store/moviesStore';

export const MoviePage = ({match: {params: {movieName, date}}}) => {
    return (
        <>
            {movies.map(({name, id, ...otherProps})=> name === movieName ? <MovieInfo name={name} date={date} key={id}{...otherProps}/> : undefined)}
        </>
    )
}
