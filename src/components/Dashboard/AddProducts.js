import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddProducts = () => {
          const { register, formState: { errors }, handleSubmit, reset} = useForm();

          const {data: tool, isLoading} = useQuery('tool' , () => fetch('http://localhost:5000/tool').then(res => res.json()))
          const imageStorageKey = '139504fef1482cad63f78ef0451904d5'

    const onSubmit = async data => {
              const image = data.image[0];
              const formData = new FormData()
              formData.append('image', image)
              const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
              fetch(url, {
                        method: 'POST',
                        body: formData

              })
              .then(res => res.json())
              .then(result =>{
                    if(result.success){
                        const img = result.data.url;
                        const product = {
                            name: data.name,
                            email: data.email,
                            discription: data.discription,
                            price: data.price,
                            minimumorderquantity: data.minimumOrder,
                            availablequantity: data.availableQuantity,
                            img: img
                        }
                        
                        // send to your database 
                        fetch('http://localhost:5000/product', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify(product)
                        })
                        .then(res =>res.json())
                        .then(inserted =>{
                            if(inserted.insertedId){
                                toast.success("Product added" )
                                reset();
                            }
                            else{
                                toast.error(' you failed to add the product');
                              }
                    })
    
                }
                
            })
        }
    


      if(isLoading){
                return <Loading></Loading>
      }

          return (
                    <div>
                              <h2> add a products</h2>
                              <form onSubmit={handleSubmit(onSubmit)}>

  <div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="Products Name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
    <input
        type="email"
        placeholder="Your Email"
        className="input input-bordered w-full max-w-xs"
        {...register("email", {
            required: {
                value: true,
                message: 'Email is Required'
            },
            pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
            }
        })}
    />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">price</span>
    </label>
    <input
        type="text"
        placeholder="Price"
        className="input input-bordered w-full max-w-xs"
        {...register("price", {
            required: {
                value: true,
                message: 'number'
            },
        })}
    />
    {/* <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label> */}
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Description</span>
    </label>
    <input
        type="text"
        placeholder="discription"
        className="input input-bordered w-full max-w-xs"
        {...register("discription", {
            required: {
                value: true,
                message: 'discription is required'
            },
        })}
    />
    {/* <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label> */}
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Minimum Order Quantity</span>
    </label>
    <input
        type="number"
        placeholder="write minimum order Quantity"
        className="input input-bordered w-full max-w-xs"
        {...register("minimumorderquantity", {
            required: {
                value: true,
                message: 'minimum order quantity is required'
            },
        })}
    />
    {/* <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label> */}
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Available Quantity</span>
    </label>
    <input
        type="number"
        placeholder="availablequantity"
        className="input input-bordered w-full max-w-xs"
        {...register("number", {
            required: {
                value: true,
                message: 'Available quantity is required'
            },
        })}
    />
    {/* <label className="label">
        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label> */}
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">photo</span>
    </label>
    <input
        type="file"
        className="input input-bordered w-full max-w-xs"
        {...register("image", {
            required: {
                value: true,
                message: 'image is Required'
            }
        })}
    />
    <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
</div>


<input className='btn w-full max-w-xs text-white' type="submit" value="add" />
</form>
                    </div>
          );
};

export default AddProducts;