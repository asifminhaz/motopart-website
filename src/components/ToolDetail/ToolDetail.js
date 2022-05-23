import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
          const {toolId} = useParams()
          const [tool, setTools] = useState({})

          useEffect(() => {
                    const url = `http://localhost:5000/tool/${toolId}`
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setTools(data))
          },[])
          return (
                    <div>
                         <h3 className='text-2xl text-center'>welcome to tool details</h3>  
                         <div class="hero flex-row">
  <div class="hero-content ">
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={tool.image} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{tool.name}</h2>
    <p>{tool.discription}</p>
    <p className='font-bold'>price:${tool.price}</p>
    <p className='font-bold'>Minimum Order:{tool.minimumorderquantity}</p>
    <p className='font-bold'>Available Quantity:{tool.availablequantity}</p>
  </div>
</div>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Phone number" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Order</span>
          </label>
          <input type="number" placeholder="Minimum order" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Purchase</button>
        </div>
      </div>

     
    </div>
  </div>
</div>   
                    </div>
          );
};

export default ToolDetail;