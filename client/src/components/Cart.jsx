// Cart.js
import React from 'react';
import {Badge, Row, Col, Image, ListGroup, FormControl, Button, Container, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {

  return (
    <ListGroup variant="flush">
      {cartItems.map((item) => (
        <ListGroup.Item key={item._id} style={{  backgroundColor: 'transparent'}}>
          {/* The rest of your card rendering code */}
          <Row>
                                <Col md={4}>
                                    <Image style={{boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)', marginBottom:'15px'}} src={item.image} alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={6}>
                                    <Link to={`/product/${item._id}`} className='product-details'><h5 style={{fontWeight:'bold'}}>{item.name}</h5></Link>
                                    <h5 className='product-details' style={{fontWeight:'bold'}}>Size: 10</h5>
                                    <h5 className='product-details' style={{fontWeight:'bold'}}>${item.price}</h5>
                                   </Col>
                                <Col md={2}>
                                    <Button type='button' variant='dark' style={{backgroundColor:'transparent', border:'transparent', boxShadow: '3px 3px 3px 3px rgba(0, 0, 0, 0.1)'}}>
                                        <FaTrash/>
                                    </Button>
                                </Col>
                            </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Cart;
