import React from 'react';

const Product = ({tool}) => {
const {name, email, quantity, price} = tool
          return (
                    
                                <tr>
                    <th>1</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                  </tr>
                   
          );
};

export default Product;