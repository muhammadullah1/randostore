import React, { useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useItems } from '../Hooks/FetchItemsContext';

const Additems = () => {
  const itemsList = useItems();
  const { addItem } = itemsList;
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(true);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    addItem(formData);
    setFormData({})
    event.target.reset();
  };

  return (
    <Container className='container mx-auto my-5' fluid="md">
      <h1 className='text-center my-3'>Add Items</h1>
      <Row className="g-4 mx-auto">
      <Col xs={10} md={8} lg={6} className="mx-auto">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="my-5" controlId="formBasicEmail">
        <Form.Control required type="text" name="name" placeholder="Enter Item Name" className='rounded-0 p-2 input-field' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Control required type="text" name="price" placeholder="Price" className='rounded-0 p-2 input-field' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Control required type="text" name="img" placeholder="Image" className='rounded-0 p-2 input-field' onChange={handleChange}/>
      </Form.Group>
      <div className="d-grid gap-2 my-5">
      <Button type="submit" size="lg" className='mx-auto rounded-0 item-add-btn'>
        Add Item
      </Button>
    </div>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}

export default Additems;