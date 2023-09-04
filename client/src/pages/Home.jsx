import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Products from '../components/Products'
import products from '../products'

const Home = () => {
// const {data: products, isLoading, error} = useGetProductsQuery();

  return ( 
    <Container style={{marginBottom:'20px'}}>
    <h1 className='home-title' style={{marginTop:'30px'}}>Browse Our Collection</h1>
    <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Products product={product}/>
            </Col>
        ))}
        
    </Row>
    </Container>
  )
}

export default Home