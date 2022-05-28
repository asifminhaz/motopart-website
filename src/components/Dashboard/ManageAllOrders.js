import React, { useEffect, useState } from 'react';
import Order from './Order';

const ManageAllOrders = () => {
          const [orders, setOrders] = useState([])

          useEffect(  () => {
                    fetch(`http://localhost:5000/order` , {
                              method: 'GET',
                              headers: {
                                  'content-type': 'application/json',
                                 
                              },
                          
                          })
                          .then(res =>res.json())
                          .then(data=> {
                              setOrders(data)
                          })
                        
                  
          
          },[])
          return (
                    <div>
                             <h1>All Orders</h1>
                             <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
    {
              orders.map(order => <Order
              key={order._id}
              order={order}
              ></Order>)
    }
    </tbody>
  </table>
</div>
                    </div>
          );
};

export default ManageAllOrders;