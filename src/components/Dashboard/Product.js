import React from 'react';

const Product = ({tool, index, refetch, setDeletingProduct}) => {
const {name, email, quantity, price} = tool
          return (
                    
                                <tr>
                    <th>{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>
                <label onClick={() => setDeletingProduct(tool)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
                  </tr>
                   
          );
};

export default Product;