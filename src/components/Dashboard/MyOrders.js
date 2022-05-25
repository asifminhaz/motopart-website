import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

      const [orders, setOrders] = useState([])
      const [user] =useAuthState(auth)

      useEffect( () => {
            fetch(`http://localhost:5000/orders/${user.email}`, {
                  method: "GET",
                  headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            })
            .then(res => res.json())
            .then(data => setOrders(data))
      },[user])
          return (
                    <div>
                          <h1>my orders: {orders.length}</h1>  
       <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>orders</th>
      </tr>
    </thead>
    <tbody>
     
     {
           orders.map(o =>  <tr>
            <th>1</th>
            <td>{o.userName}</td>
            <td>{o.email}</td>
            <td>{o._id}</td>
          </tr>)
     }
      
    </tbody>
  </table>
</div>

                    </div>
          );
};

export default MyOrders;