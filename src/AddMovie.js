
import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import './AddMove.css'
function AddMovie({ update }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//create this state to add new movie 
  const [clearMovie, setClearMovie]=useState({
      image:'',
      title:'',
      descrpt:'',
      link:'',
      rate:0
  })
  const handleChange = (e) =>{
      e.preventDefault();
      setClearMovie ({
          ...clearMovie, [e.target.id]: e.target.value,
      });
  }
// create a function to empty the form after adding movie
 const handleClean = (e) => {
     e.preventDefault();
     setClearMovie({
        image:'',
        title:'',
        descrpt:'',
        link:'',
        rate:0
     })
 }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='ml-3 mt-3'>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your Movie or Serie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
             <Form.Control type='text' placeholder='image..' id='image' onChange={handleChange} /><br/>
             <Form.Control type='text' placeholder='title...' id='title' onChange={handleChange}/><br/>
             <Form.Control type='text' placeholder='descrpt..' id='descrpt' onChange={handleChange}/> <br/>
             <Form.Control type='text' placeholder='link..'  id='link' onChange={handleChange} /> <br/>
             <Form.Control type='number' min={0} max={5} placeholder='rate...' id='rate' onChange={handleChange}/> <br/>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=> { update (clearMovie,e);handleClose(e);handleClean(e) }}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie
