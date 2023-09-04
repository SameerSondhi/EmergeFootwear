// CartScreen.js
import React from 'react';
import { Row, Col, Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import Cart from '../components/Cart' // Adjust the path accordingly
import cartItems from '../cart';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const CartScreen = () => {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRedirect = () => navigate('/')

  const handleCloseRedirect = () => {
    handleClose();
   handleRedirect();

  }

  return (
    <Container className='cart-screen-container'>
    <Row>
      <Col md={7}>
        <h1 style={{ marginTop:'20px',marginBottom: '20px'}} className='product-details'>Shopping Cart</h1>
        <Cart cartItems={cartItems} />
      </Col>
      <Col md={5}>
        {/* Add the subtotal and checkout section here */}
        <Card style={{marginTop:'20px', backgroundColor:'transparent', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)', marginBottom:'40px'}}>
                <ListGroup variant='flush'>
                    <ListGroupItem style={{backgroundColor:'transparent'}}>
                        <h2 className='product-details' style={{fontWeight:'bold'}}>Subtotal for 3 items: </h2>
                        <h2 className='product-details' style={{fontWeight:'bold'}} >$229.97</h2>
                    </ListGroupItem>
                    <ListGroupItem style={{backgroundColor:'transparent'}}>
                        <Button onClick={handleShow} type='button' disabled={cartItems.length===0} style={{backgroundColor: '#000000',backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)', color:'whitesmoke'}}>
                            Place Order
                        </Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
      </Col>
    </Row>
    <Modal show={show} onHide={handleClose} dialogClassName='custom-modal' size='lg' centered>
        <Modal.Header closeButton onClick={handleRedirect}>
          <Modal.Title className='product-details'><h1>We've Received Your Order!</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3 className='product-details'>Your subtotal is: $229.97</h3>
        <p className='product-details'>Please head over to our store to try out your items.</p>
        <p className='product-details'>Once all sizes are confirmed, we will process your payment.</p>
        <p className='product-details'>Thank you for shopping with us!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor: '#000000',
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)', color:'whitesmoke'}} onClick={handleCloseRedirect}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartScreen;
