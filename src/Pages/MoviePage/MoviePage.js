import React from 'react';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { movies } from '../../store/moviesStore';
import { Calendar } from '../../components/Calendar/Calendar';
import { Cinemas } from '../../components/Cinemas/Cinemas';

export const MoviePage = ({match: {params: {movieName}}}) => {
    return (
        <>
            {movies.map(({name, id, ...otherProps})=> name === movieName ? <MovieInfo name={name} key={id}{...otherProps}/> : undefined)}
            <Calendar/>
            <Cinemas/>
        </>
    )
}
