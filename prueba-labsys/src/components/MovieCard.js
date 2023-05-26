import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom";
import React, {useState} from "react";


function MovieCard(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.movie.Poster} />
            <Card.Body>
              <Card.Title>{props.movie.Title}</Card.Title>
              <Card.Text>
                {props.movie.Ratings[0]?props.movie.Ratings[0].Source+" "+props.movie.Ratings[0].Value:"No se encontró ninguna reseña."}
              </Card.Text>
                    <Button variant="primary" onClick={(handleShow)}>Ver en detalle</Button>
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>{props.movie.Title}</Modal.Title>
                        </Modal.Header>
                        <img style={{"height":"600px","width":"auto"}} src={props.movie.Poster} />
                        <Modal.Body>{props.movie.Ratings[0]?props.movie.Ratings[0].Source+" "+props.movie.Ratings[0].Value:"No se encontró ninguna reseña."}</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                          </Button>
                        </Modal.Footer>
                    </Modal>
            </Card.Body>
    </Card>
    )
}
export default MovieCard;