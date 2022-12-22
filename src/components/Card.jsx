import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useItems } from '../Hooks/FetchItemsContext';

const Cards = ({imgUrl , itemName, price, item}) => {
  const itemsList = useItems();
    const { cart, addToCart } = itemsList;
  return (
    <Card border="light" className='rounded-0 card-comp'>
      <Card.Img variant="top" src={imgUrl} width={200} height={200} className='p-1 border-0 rounded-0 card-img' />
      <Card.Body>
        <Card.Title>{itemName}</Card.Title>
        <div className='d-flex justify-content-start'>
          <h4>Rs.</h4>
          <h4 className='px-3'>{price}</h4>
        </div>
        <Card.Text className='my-4'>
          <Button className='rounded-0 card-btn btn-danger text-white' onClick={() => addToCart(item)}>Add to cart</Button>
        </Card.Text>
      </Card.Body>
    </Card>

  )
}

export default Cards
