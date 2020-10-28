import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
const MovieList = ({myMovies, text, rates}) => {
  if (text!=="") {
    return (
      
         
            (<div className='list_movie'>
                {myMovies.filter(el => el.title.toLowerCase().includes(text.toLowerCase()))
                .map((el,i)=>(<MovieCard key={i} movie={el}/>))}
            </div>)
             );
            }
           
       return   (<div className='list_movie'>
                {myMovies.filter(el => el.rate>=rates)
                .map((el,i)=>(<MovieCard key={i} movie={el}/>))}
            </div>)
            
}

export default MovieList
