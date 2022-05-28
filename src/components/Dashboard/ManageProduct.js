import React, { useEffect, useState } from 'react';
import Tool from '../Home/Tool';
import Product from './Product';

const ManageProduct = () => {
          const [tools, setTools] = useState([])

          useEffect(  () => {
                    fetch(`http://localhost:5000/tool` , {
                              method: 'GET',
                              headers: {
                                  'content-type': 'application/json',
                                 
                              },
                          
                          })
                          .then(res =>res.json())
                          .then(data=> {
                              setTools(data)
                          })
                        
                  
          
          },[])
          return (
                    <div>
                              <h3>Manage All Products:{tools.length}</h3>
                              <div class="overflow-x-auto">
                              <table class="table w-full">
  
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Email</th>
      <th>Price</th>
      
      <th>Quantity</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
  {
            tools.map(tool => <Product
            key={tool._id}
            tool={tool}
            ></Product>)
  }
  </tbody>
</table>
</div>
                    </div>
          );
};

export default ManageProduct;