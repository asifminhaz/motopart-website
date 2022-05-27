import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Tools from '../Home/Tools';
import Loading from '../Shared/Loading';
import ShowReview from './ShowReview';

const Review = () => {
          const { register, formState: { errors }, handleSubmit, reset} = useForm();
          const [reviews, setReviews] = useState([])    
          const onSubmit = async data => {
                    const allReviews = {
                              name: data.name,
                              email: data.email,
                              discription: data.discription,
                              ratings : data.rating
                    }
                              // send to your database 
                              fetch('http://localhost:5000/reviews', {
                                  method: 'POST',
                                  headers: {
                                      'content-type': 'application/json',
                                      authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                  },
                               body: JSON.stringify(allReviews)
                              })
                              .then(res =>res.json())
                              .then(data=> {
                                  console.log(data)
                              })
                              reset()

                              fetch('http://localhost:5000/reviews', {
                                  method: 'GET',
                                  headers: {
                                      'content-type': 'application/json',
                                      authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                  },
                               body: JSON.stringify(allReviews)
                              })
                              .then(res =>res.json())
                              .then(data=> {
                                  console.log(data)
                              })
                              reset()
                      }
          return (
                    <div>
                              <h2>add a review</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Name</span>
    </label>
    <input
        type="text"
        placeholder="your name"
        className="input input-bordered w-full max-w-xs"
        {...register("name", {
            required: {
                value: true,
                message: 'Name is Required'
            }
        })}
   required />
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
   required />
    <label className="label">
        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
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
   required />
  
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Ratings</span>
    </label>
    <input
        type="text"
        placeholder="1-5"
        className="input input-bordered w-full max-w-xs"
        {...register("rating", {
            required: {
                value: true,
                message: 'ratings is required'
            },
        })}
   required />
  
</div>
<input className='btn w-full max-w-xs text-white' type="submit" value="add" />
</form>
 </div>
          );
};

export default Review;