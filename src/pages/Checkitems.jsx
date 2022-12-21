import React from 'react'
import { Table } from 'react-bootstrap';
import { useItems } from '../Hooks/FetchItemsContext'; 

const Checkitems = () => {
  const itemsList = useItems();
  const { cart, removeFromCart } = itemsList;
  return (
    <div className='container mx-auto my-5'>
      <h1 className='text-center my-3'>Checked Items List</h1>
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
    </div>
  )
}

export default Checkitems;

