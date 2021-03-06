import React from 'react';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { movies } from '../../store/moviesStore';

export const MoviePage = ({match: {params: {movieName}}}) => {
    return (
        <>
            {movies.map(({name, id, ...otherProps})=> name === movieName ? <MovieInfo name={name} key={id}{...otherProps}/> : undefined)}
        </>
    )
}
