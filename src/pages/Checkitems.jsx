import React from 'react'
import { Table, Button } from 'react-bootstrap';
import { useItems } from '../Hooks/FetchItemsContext'; 

const Checkitems = () => {
  const itemsList = useItems();
  const { cart, removeFromCart } = itemsList;
  const totalprice =  cart.reduce((total,currentItem) =>  total = total + Number(currentItem.price) , 0 );
  return (
    <div className='container mx-auto my-5'>
      <h1 className='text-center my-5'>Checked Items List</h1>
      <Table  bordered hover>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Item Name</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><i className="bi bi-trash-fill text-danger" onClick={() => removeFromCart(item)}></i></td>
          </tr>
        ))}
      </tbody>
    </Table>
    <div className='d-flex justify-content-evenly my-5'>
<Button className='proceed-btn rounded-0' href='https://access.sandbox.checkout.com/connect/token' target='_blank'>Check Out</Button>
<h3 className=''>Total Rs: {totalprice}</h3>
    </div>
    </div>
  )
}

export default Checkitems;

