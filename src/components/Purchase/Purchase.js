import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
          
          return (
                    <div>
                        <h2 className='text-center text-3xl font-bold m-4'>Coming Soon</h2> 
                        <div class="card w-full bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="Shoes" /></figure>
  <div class="card-body text-center">
    <h2 class="card-title"></h2>
    <p>Please Wait  </p>
  </div>
</div>     
                    </div>
          );
};

export default Purchase;