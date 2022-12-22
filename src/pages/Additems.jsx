import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useItems } from '../Hooks/FetchItemsContext';

const Additems = () => {
  const itemsList = useItems();
  const { addItem } = itemsList;
  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if ( Object.keys(newErrors).length > 0 ) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      addItem(form);
      e.target.reset();
      alert('Item added')
      
    }
  }

  const findFormErrors = () => {
    const { name, price, img } = form
    const newErrors = {}
    // name errors
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    else if ( name.length > 30 ) newErrors.name = 'item name is too long!'
    // price errors
    if ( !price || price === '' ) newErrors.price = 'cannot be blank!'
    else if ( price.length > 8 ) newErrors.price = 'price is too long!'
     // img url errors
     if ( !img || img === '' ) newErrors.img = 'cannot be blank!'
    return newErrors
  }


  return (
    <Container className='container mx-auto my-5' fluid="md">
      <h1 className='text-center my-3'>Add Items</h1>
      <Row className="g-4 mx-auto">
      <Col xs={10} md={8} lg={6} className="mx-auto">
      <Form  onSubmit={handleSubmit}>
      <Form.Group className="my-5" controlId="formBasicEmail">
        <Form.Control  type="text" name="name" placeholder="Enter Item Name" className='rounded-0 p-2 input-field'  
        onChange={ e => setField('name', e.target.value) } isInvalid={ !!errors.name }/>
         <Form.Control.Feedback type='invalid'>{ errors.name }</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Control  type="text" name="price" placeholder="Price" className='rounded-0 p-2 input-field' 
        onChange={ e => setField('price', e.target.value) } isInvalid={ !!errors.price }/>
         <Form.Control.Feedback type='invalid'>{ errors.price }</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Control  type="text" name="img" placeholder="Image" className='rounded-0 p-2 input-field' 
        onChange={ e => setField('img', e.target.value) } isInvalid={ !!errors.img }/>
         <Form.Control.Feedback type='invalid'>{ errors.img }</Form.Control.Feedback>
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