import React from 'react';

const Special = () => {
          return (
                    <div><h1 class="text-5xl font-bold text-center p-10">Leave us a Message</h1>
                    <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                      <div class="text-center lg:text-left">
                        
                        <p class="py-6">If you faced any problem to place the order please contact us</p>
                        <h4 class=" font-bold">Call US</h4>
                        <p class="py-6 font-extrabold">015873844590</p>
                        <h4 class=" font-bold">Sent Us Email.</h4>
                        <p class="py-6 font-extrabold">minhazurrahmansif@gmail.com</p>
                        <h4 class=" font-bold">Meet Us At.</h4>
                        <p class="py-6 font-extrabold">Chittagong, 4204, dhaka</p>
                      </div>
                      
                      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                          <div class="form-control">
                            <label class="label">
                              <span class="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="write your name" class="input input-bordered" />
                          </div>
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
                            <input type="text" placeholder="write about your issue" class="input input-bordered" />
                          </div>
                          <div class="form-control">
                            <label class="label">
                              <span class="label-text">Massage</span>
                            </label>
                            <input type="text" placeholder="write here" class="input input-bordered" />
                            
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

export default Special;