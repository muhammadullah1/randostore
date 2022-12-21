import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useItems } from '../Hooks/FetchItemsContext'; 

const Itemslist = () => {
    const itemsList = useItems();
    const { store, addToCart } = itemsList;
    return (
          store.length < 1 ? <h1 className='text-center my-5'>Data is Loading</h1>
           :
            <div className='container mx-auto my-5'>
                 <h1 className='text-center my-3'>All Items</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
              {store.map((_, idx) => (
                <Col key={_.id}>
                  <Card className='rounded-0'>
                    <Card.Img variant="top" src="https://picsum.photos/200/200" width={200} height={200} className='p-1'/>
                    <Card.Body>
                      <Card.Title>{_.name}</Card.Title>
                      <div className='d-flex justify-content-start'>
                        <h4>Rs.</h4> 
                        <h4 className='px-3'>{_.price}</h4>
                      </div>
                      <Card.Text className='my-4'>
                      <Button variant="success" className='rounded-0' onClick={() => addToCart(_)}>Add to cart</Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
    )
}

export default Itemslist;