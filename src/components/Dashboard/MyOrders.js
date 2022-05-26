import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

      const [orders, setOrders] = useState([])
      const [user] =useAuthState(auth)
const navigate = useNavigate()
      useEffect( () => {
            fetch(`http://localhost:5000/orders/${user.email}`, {
                  method: "GET",
                  headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            })
            .then(res => {
                  console.log('res', res)
                  if(res.status === 401 || res.status === 403){
                        signOut(auth)
                        localStorage.removeItem('accessToken')

                        navigate('/')
                  }
                 return res.json()})
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