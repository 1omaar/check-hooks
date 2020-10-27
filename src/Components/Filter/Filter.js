import React from 'react'
import './Filter.css';
import { Navbar, Form, FormControl, Jumbotron } from 'react-bootstrap'
function Filter({handleRate, handleText}) {
    return (
        <>
        <Navbar bg="dark" className='nav-design'> 
            <Form >
                <FormControl type="text" placeholder="Filter Text" className=" mr-sm-2" onChange={(e)=>handleText(e.target.value)} />
            </Form>
            <Form className='FilterRate-design'>
                <FormControl type="number"max={5} min={0} placeholder="Filter Rate" className=" mr-sm-2" onChange={(e)=>handleRate(e.target.value)} />
            </Form>
        </Navbar>
        <Jumbotron className='netzlix-design'>
                <h1>NetZlix</h1>
        </Jumbotron>
        </>
    )
}

export default Filter
