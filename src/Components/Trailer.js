import React from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import './Trailer.css'
function Trailer(props) {
    let history= useHistory()
    return (
        <div className='trailer-design'>
            <h1 className='title-design'>{props.location.state.title} Trailer</h1>
            <div className='container-design'>
                <iframe src={props.location.state.lien}></iframe>
                <h4 className='description-design'>Description: {props.location.state.description}</h4>
                <Button variant="light" onClick={() => history.push('/')}>Go to MovieList</Button>
            </div>
           
        </div>
    )
}

export default Trailer
