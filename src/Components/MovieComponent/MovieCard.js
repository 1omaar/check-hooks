import React from 'react'
import Rating from '@material-ui/lab/Rating';
import {Card,Button} from 'react-bootstrap'
import './MovieCard.css'

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
                <Button variant="outline-dark"><a href={link} target='_blank' style={{color:'white'}}>Go to Movie</a></Button>
                <Rating name="read-only" value={rate}  readOnly/>
                
                </div>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
