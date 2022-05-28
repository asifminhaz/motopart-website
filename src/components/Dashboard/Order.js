import React from 'react';

const Order = ({order}) => {
          const {userName, email, address, phone} = order
          return (
                    <tr>
                    <th>1</th>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                  </tr>
                  
          );
};

export default Order;