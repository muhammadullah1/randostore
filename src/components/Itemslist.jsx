import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from './Card';
import { useItems } from '../Hooks/FetchItemsContext'; 

const Itemslist = () => {
    const itemsList = useItems();
    const { store } = itemsList;
    return (
          store.length < 1 ? <h1 className='text-center my-5'>Data is Loading</h1>
           :
            <div className='container mx-auto my-5'>
                 <h1 className='text-center my-5'>All Items</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
              {store.map((_, idx) => (
                <Col key={idx}>
                  <Card imgUrl={'https://picsum.photos/200/200'} itemName={_.name} price={_.price}
                   item={_}/>
                </Col>
              ))}
            </Row>
          </div>
    )
}

export default Itemslist;