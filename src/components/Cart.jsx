import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useItems } from '../Hooks/FetchItemsContext'; 
import Total from './Total';
import { useEffect } from "react";

function Cart() {
    const itemsList = useItems();
    const { cart, removeAllFromCart } = itemsList;
    useEffect(() => {

    }, [cart])
  return (
    <Card style={{ width: '15rem'}} className="mx-auto mt-5 shadow py-3 bg-body rounded-0 ">
      <ListGroup variant="flush">
        {cart.map((item) => (
            <ListGroup.Item
              key={item.id}>
               { item.name}
              </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body className='mt-3'>
        <p>items in cart: {cart.length}</p>
      <Total items={cart}/>
        <Card.Link className='btn btn-info mt-3 rounded-0' as="li"><Link  to="/checkeditems">View Cart</Link></Card.Link>
        <Card.Link className='btn btn-danger mt-3 rounded-0' onClick={() => removeAllFromCart('cart')}>Clear Cart</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cart;