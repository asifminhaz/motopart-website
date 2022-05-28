import React, { useEffect, useState } from 'react';
import Tool from '../Home/Tool';
import DeleteConfirmModal from './DeleteConfirmModal';
import Product from './Product';

const ManageProduct = () => {
          const [tools, setTools] = useState([])
          const [deletingProduct, setDeletingProduct] = useState(null);

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
            tools.map((tool, index) => <Product
            index={index}
            key={tool._id}
            setDeletingProduct={setDeletingProduct}
            tool={tool}
            ></Product>)
  }
  </tbody>
</table>
{deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
               
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>}
</div>
                    </div>
          );
};

export default ManageProduct;