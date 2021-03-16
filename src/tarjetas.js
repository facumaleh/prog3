import './tarjetas.css';
import { useState, useEffect } from "react";
import{Button,Modal,Card,ListGroupItem,ListGroup} from 'react-bootstrap';




const SocialCard = ({ userData }) => {
	  
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
    return (

			


        <div className="card">
			<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={userData.picture.large} />
  <Card.Body>
    <Card.Title>{userData.name.first} {userData.name.last}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><p className="card-text">Email:{userData.email}</p></ListGroupItem>
    
    <ListGroupItem><p className="card-text cap"> Direccion:{userData.location.city}, {userData.location.state},{userData.location.street.name},{userData.location.street.number}</p></ListGroupItem>
    <ListGroupItem><p className="card-text">Telefono:  {userData.phone}</p></ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Button variant="primary" onClick={handleShow}>
        			Mas info
      					</Button>
						  <Modal show={show} onHide={handleClose} animation={false}>
        				<Modal.Header closeButton>
         			 	<Modal.Title>{userData.name.first} {userData.name.last}</Modal.Title>
        				</Modal.Header>
       			 		<Modal.Body> 
									<img src={userData.picture.medium}/>
									<h3 id="name" className="card-name cap">{userData.name.first} {userData.name.last}</h3>
									<p className="card-text">Email:{userData.email}</p>
									<p className="card-text cap"> Direccion:{userData.location.city}, {userData.location.state},{userData.location.street.name},{userData.location.street.number}</p>
                   					<p className="card-text">Telefono:  {userData.phone}</p>
							</Modal.Body>
      					</Modal>	

  </Card.Body>
</Card>













				
			

        

        </div>
    )
};


export default SocialCard;