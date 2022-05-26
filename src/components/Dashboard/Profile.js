import React from 'react';

const Profile = () => {
          return (
                    <div>
                              <h3>welcome to your profile</h3>
                              <div className="hero">
                                        <form >
                                        <div className="hero-content flex-col lg:flex-row-reverse">
                                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="text" placeholder="your name" className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="text" placeholder="email" className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="text" placeholder="Education" className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="number" placeholder="phone number" className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="text" placeholder="LinkeDin " className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input  type="text" placeholder="Address" className="input input-bordered" required />
                                       </div>
                                          <div className="form-control mt-6">
                                      <button className="btn btn-primary">Submit</button>
                                      
                                              
                                           </div>
                                          </div>
                                          </div>
                                        </div>
                                        </form>
                              </div>
                    </div>
          );
};

export default Profile;