import React, {useState} from 'react'
import './App.css';
import MovieList from './Components/MovieComponent/MovieList'
import AddMovie from './AddMovie';
import Filter from './Components/Filter/Filter'
const App = () => {
  const [movie, setMovie]= useState([{image:"/images/the-100.jpg",title:"The 100",descrpt:"Une station spatiale abritant les derniers humains survivants après un incident nucléaire envoie 100 jeunes délinquants à la surface de la Terre, 97 ans plus tard, afin qu'ils la re-colonisent...",link:"https://www.zt-za.com/telecharger-serie/71705-telecharger-les-100-saison-7-hdtv-vostfr.htmlé",rate:3},
      {image:"/images/the-blacklist.jpg",title:"The Blacklist",descrpt:"The Blacklist est une série télévisée américaine centrée sur un ancien agent nommé Raymond Red Reddington qui s'est échappé depuis des décennies et qui à présent est le plus recherché par le FBI. Soudainement, il se rend en personne au quartier général du FBI avec une offre sur l'emplacement d'un grand nombre de terroristes...",link:"http://www.cpasmieux.club/seriestreaming/drame-s/551-the-blacklist.html",rate:4}]) 
      //create a function to update the new movie with the new value of component addMovie
      let updateMovies = (movies) =>{
      (movies.image === "") ? alert("Please Enter the url image") : (movies.title === "") ?
      alert("Please Enter the title") : (movies.descrpt === "") ?
        alert("Please Enter the description") : (movies.link === '') ? alert("Please Enter the lin of movie") : (movies.rate === 0) ? alert('Please Enter the rate') :setMovie([...movie, movies]);
      }
   //create states Rate and text for filter component
   const [Rate, setRate] = useState (null)
   const [text, setText] = useState ('')
   
   //functions for adding a rate and text

   const handleRate = (Rate) => setRate (Rate)
   const handleText = (text) => setText (text) 
  return (
      <div >
        <Filter handleRate={handleRate} handleText={handleText}/>
        <AddMovie update={updateMovies}/>
        <MovieList myMovies={movie} text={text} rates={Rate}/>
      </div>
  )
}

export default App;
