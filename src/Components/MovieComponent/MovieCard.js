import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {Card,Button} from 'react-bootstrap'
import './MovieCard.css'
import { Link } from 'react-router-dom'
const MovieCard = ({movie: {image, title, descrpt, link, rate } }) => {
    return (
        <Card className='card__design' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className='title__design'>{title}</Card.Title>
                <Card.Text className='des__design'>
                {descrpt}
                </Card.Text>
                <div className='div__design'>
                    <Button variant="outline-dark"><Link to={{pathname:`/Trailer/${title}`,
              state:{
                  title:title,
                  description:descrpt,
                  lien:link
              }
                
               } }   style={{color:'white'}}>See the Trailer</Link></Button>
                    <Rating name="read-only" value={rate}  readOnly/>
                </div>

            </Card.Body>
        </Card>
    )
}

export default MovieCard
