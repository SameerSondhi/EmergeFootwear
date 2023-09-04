import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Products = ({product}) => {
    const [isHovered, setHovered] = useState(false);
  return (
    <motion.div
    //   className="card"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, backgroundColor: '#f0f0f0' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    <Card className="my-3 p-3 rounded" id='product-card'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top"/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`} style={{textDecoration:'none'}}>
                <Card.Title as="div" className="product-title">
                    <h5><strong>{product.name}</strong></h5>
                </Card.Title>
            </Link>
            {/* <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
            </Card.Text> */}
            <Card.Text as='h3' className="price"><strong>
                ${product.price}
                </strong>
            </Card.Text>
        </Card.Body>
        </Card>
        </motion.div>
  )
}

export default Products