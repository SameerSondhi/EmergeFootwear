import React from 'react'
import { useState } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl, Container, Alert} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'



const ProductScreen = () => {
    const {id: productId} = useParams();
    const product = products.find((p)=>p._id === productId)

    const[selectedSize, setSelectedSize] = useState('')

    
    const [showAlert, setShowAlert] = useState(false); // State to control whether to show the alert

  return (
    <Container style={{height:'100vh'}}>
    <Link className='btn btn-light my-3' style={{backgroundColor: '#000000',
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)', color:'whitesmoke'}} to='/'>Go Back</Link>
    <Row>
        <Col md={4}>
            <Image style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }} src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4} >
            <ListGroup variant='flush'>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <h2 className='product-details' style={{fontWeight:'bold'}}>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <Rating value={product.rating} text={`${product.numReviews} ratings`}/>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                <p className='product-details' style={{fontWeight:'bold'}}>{product.description}</p>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={4}>
            <Card style={{backgroundColor:'transparent', boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)', marginBottom:'40px'}}>
                <ListGroup variant='flush'>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <Row>
                        <Col className='product-details' style={{fontWeight:'bold'}}>Price: </Col>
                        <Col>
                        <strong className='product-details' >${product.price}</strong>
                        </Col>
                        </Row>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <Row>
                        <Col className='product-details' style={{fontWeight:'bold'}}>Category: </Col>
                        <Col>
                        <strong className='product-details'>{product.category}</strong>
                        </Col>
                        </Row>
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <Row>
                        <Col className='product-details' style={{fontWeight:'bold'}}>Status: </Col>
                        <Col>
                        <strong className='product-details'>{product.countInStock>0 ? 'In Stock' : 'Out of Stock'}</strong>
                        </Col>
                        </Row>
                </ListGroup.Item>
                {product.countInStock>0 && (
                   <ListGroup.Item style={{backgroundColor:'transparent'}}>
                   <Row>
                       <Col className='product-details' style={{fontWeight:'bold'}}>Size: </Col>
                       <Col >
                           <FormControl
                               as='select'
                               value={selectedSize}
                               onChange={(e) => setSelectedSize(e.target.value)}
                               className='product-details'
                               style={{backgroundColor:'transparent'}}>
                               {product.sizes.map((size) => (
                                   <option key={size} value={size} className='product-details' >
                                      {size}
                                   </option>
                               ))}
                           </FormControl>
                       </Col>
                   </Row>
               </ListGroup.Item>
               
                )}
                <ListGroup.Item style={{backgroundColor:'transparent'}}>
                    <Button className='btn-block' style={{backgroundColor: '#000000',
  backgroundImage: 'linear-gradient(147deg, #000000 0%, #2c3e50 74%)', color:'whitesmoke'}} type="button" disabled={product.countInStock===0} onClick={() => setShowAlert(true)}>Add to Cart</Button>
                     </ListGroup.Item>
                </ListGroup>
            </Card>
            {showAlert && (
        <Row>
          <Col md={{ span: 20 }}>
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
              Cart limit reached. Please limit 3 items per cart.
            </Alert>
          </Col>
        </Row>
      )}
        </Col>
    </Row>
    </Container>)}

export default ProductScreen