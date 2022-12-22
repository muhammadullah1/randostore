import React from 'react';

const Total = ({ items }) => {
  const totalPrice = items.reduce((total,currentItem) =>  total = total + Number(currentItem.price) , 0 );

  return (
    <div>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Total;
