import React from 'react';
import { useForm } from 'react-hook-form';

const Profile = () => {
          const { register, formState: { errors }, handleSubmit, reset} = useForm();
          const onSubmit = async data => {
                    const allProfile = {
                              name: data.name,
                              email: data.email,
                              education: data.education,
                              phone : data.phone,
                              address: data.address,
                              linkedin: data.linkedin
                    }

                     fetch('http://localhost:5000/profile', {
                               method: 'POST',
                               headers: {
                                 'content-type': 'application/json',
                                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
                            },
                         body: JSON.stringify(allProfile)
                        })
                      .then(res =>res.json())
                         .then(data=> {
                             console.log(data)
                        })
                    
                    }
          return (
                    <div>
                              <h3>welcome to your profile</h3>
                              <div className="hero">
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
        <span className="label-text">Address</span>
    </label>
    <input
        type="text"
        placeholder="address"
        className="input input-bordered w-full max-w-xs"
        {...register("address", {
            required: {
                value: true,
                message: 'address is required'
            },
        })}
   required />
  
</div>
<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Phone Number</span>
    </label>
    <input
        type="number"
        placeholder=""
        className="input input-bordered w-full max-w-xs"
        {...register("phone", {
            required: {
                value: true,
                message: 'Number is required'
            },
        })}
   required />
  
</div>

<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Education</span>
    </label>
    <input
        type="text"
        placeholder=""
        className="input input-bordered w-full max-w-xs"
        {...register("education", {
            required: {
                value: true,
                message: 'Education is required'
            },
        })}
   required />
  
</div>


<div className="form-control w-full max-w-xs">
    <label className="label">
        <span className="label-text">Linkedin</span>
    </label>
    <input
        type="link"
        placeholder=""
        className="input input-bordered w-full max-w-xs"
        {...register("linkedin", {
            required: {
                value: true,
                message: 'ratings is required'
            },
        })}
   />
  
   </div>
   <input className='btn w-full max-w-xs text-white' type="submit" value="add" />
  </form>
                              </div>
                    </div>
          );
}


export default Profile;