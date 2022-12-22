import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Itemslist from '../components/Itemslist';
import Cart from '../components/Cart';
const AllItems = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={9}>
        <Itemslist/>
        </Col>
        <Col sm={3}>
          <h1 className='text-center mt-5'>Cart</h1>
        <Cart/>
        </Col>
      </Row>
    </Container>
  )
}

export default AllItems
