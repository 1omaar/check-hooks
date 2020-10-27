import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
const MovieList = ({myMovies, text, rates}) => {
    return (
        <div className='list_movie'>
            {myMovies.filter(el => el.title.toLowerCase().includes(text.toLowerCase()) || el.rate == rates)
            .map((el,i)=>(<MovieCard key={i} movie={el}/>))}
        </div>
    )
}

export default MovieList
