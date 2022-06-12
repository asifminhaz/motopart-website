import React from 'react';

const Contact = () => {
          return (
                    <div>
                              <h2 className='text-center font-bold text-2xl'>Contact us</h2>

                              <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Send your Feedback</h1>
      <p class="py-6">If you face any problem please send your Feedback</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
        </div>
        <div class="form-control ">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
                    </div>
          );
};

export default Contact;