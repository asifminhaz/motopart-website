import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
          const [
                    createUserWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useCreateUserWithEmailAndPassword(auth);
          const navigate = useNavigate()
          const nameRef = useRef('')
          const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigateLogin = event => {
                    navigate('/login')
          }
          if(user){
                    navigate('/home')
          }
          const handleRegister = event => {
                    event.preventDefault();
                    const name = nameRef.current.value;
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
                    
                    createUserWithEmailAndPassword(email, password)
          }
          const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
          return (
                    <div>
                              <h3 className='text-center text-4xl font-bold m-10'>Please Register</h3>
                              <div className="hero">
                                        <form onSubmit={handleRegister}>
                                        <div className="hero-content flex-col lg:flex-row-reverse">
                                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input ref={nameRef} type="text" placeholder="name" className="input input-bordered" required />
                                       </div>
                                      <div className="form-control">
                                         <label className="label">
                                             </label>
                                          <input ref={emailRef} type="text" placeholder="email" className="input input-bordered" required />
                                       </div>
                                     <div className="form-control">
                                      <label className="label">
                                     <span className="label-text">Password</span>
                                      </label>
                                       <input ref={passwordRef} type="password" placeholder="password" className="input input-bordered" required />
                                         <label className="label">
                                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                             </label>
                                            </div>
                                          <div className="form-control mt-6">
                                      <button className="btn btn-primary">Register</button>
                                      <p>New to MotoParts?<Link to='/login' className='text-error ' onClick={navigateLogin}>Please Register!!</Link></p>
                                              <div className="divider">OR</div>
                                             <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-info">Continue with google</button>
                                           </div>
                                          </div>
                                          </div>
                                        </div>
                                        </form>
                              </div>
                    </div>
          );
};

export default Register;