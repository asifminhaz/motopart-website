import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

          const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigate = useNavigate()
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useSignInWithEmailAndPassword(auth);
          const handleSubmit = event => {
                    event.preventDefault();
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
                    signInWithEmailAndPassword(email, password)
          }
          const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

          if (user || gUser) {
                  navigate('/home')
          }

          const navigateRegister = event => {
                    navigate('/register')
          }
          return (
                    <div>
                              <h2 className='text-center text-4xl font-bold m-10'>Please login</h2>
                              <div className="hero">
                                        <form onSubmit={handleSubmit}>
                                        <div className="hero-content flex-col lg:flex-row-reverse">
                                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
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
                                      <button className="btn btn-primary">Login</button>
                                      <p>New to MotoParts?<Link to='/register' className='text-error ' onClick={navigateRegister}>Please Register!!</Link></p>
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

export default Login;