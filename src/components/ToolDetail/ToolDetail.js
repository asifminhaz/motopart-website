
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ToolDetail = () => {
  // const {data: products, isLoading} = useQuery('products', () => fetch('http://localhost:5000/product', {
  //   headers: {
  //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //   }
  // }).then(res => res.json()))

  
          const {toolId} = useParams()
          const [tool, setTools] = useState([])
          const [user] = useAuthState(auth)
          const [isDisabled, setDisabled] = useState(false);
          const { image, name, minimumorderquantity, availablequantity, price, } = tool;
          
          useEffect(() => {
                    const url = `http://localhost:5000/tool/${toolId}`
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setTools(data))
          },[])
          const handleOrder = event => {
                    event.preventDefault()
                  const userName = event.target.userName.value
                    // const productsName = event.target.productsName.value
                    const email = event.target.email.value
                    const quantity = event.target.quantity.value
              if (quantity < minimumorderquantity || quantity > availablequantity) {
                         setDisabled(true)
                        toast.error('please order lower than available quantity')
                        
                    }
                    const totalCost = parseInt(quantity * price) 
                    
                    const address = event.target.address.value
                    const orderData = {userName,  email, quantity, address, totalCost }
            
                    fetch('http://localhost:5000/orders', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(orderData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            
                            if (data.insertedId) {
                                event.target.reset()
                                toast.success("Purchase  Successfully")
                            }
                        })
                }
                // if(isLoading){
                //   return <Loading></Loading>
                // }
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
    <p className='font-bold'>price:${tool?.price}</p>
    <p className='font-bold'>Minimum Order:{tool.minimumorderquantity}</p>
    <p className='font-bold'>Available Quantity:{tool.availablequantity}</p>
  </div>
</div>
      <div class="card-body">
                <form onSubmit={handleOrder}>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input value={user?.user?.displayName} name='userName' type="text" placeholder="your Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input value={user?.email}  name='email' type="text" placeholder="email" class="input input-bordered" readOnly/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone</span>
          </label>
          <input type="text" name='phone' placeholder="Phone number" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">address</span>
          </label>
          <input type="text" name='address' placeholder="address" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">quantity</span>
          </label>
          <input defaultValue={minimumorderquantity} name='quantity' type="number" placeholder="" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button  disabled={isDisabled}  type='submit' value="place a order" class="btn btn-primary">Purchase</button>
        </div>
        <Toaster />
        </form>
      </div>

     
    </div>
  </div>
</div>   
                    </div>
                    
          );
                
};

export default ToolDetail;