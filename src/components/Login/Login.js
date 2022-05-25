import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from './Loading';

const Login = () => {

          const emailRef = useRef('')
          const passwordRef = useRef('')
          const navigate = useNavigate()
          const location = useLocation()
          const [ pUser] = useAuthState(auth)
          let from = location.state?.from?.pathname || "/"
          const [
                    signInWithEmailAndPassword,
                    user,
                    loading,
                    error,
                  ] = useSignInWithEmailAndPassword(auth);
                  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
                  const [token] = useToken(user || gUser)

                 
                  let singInError;

                  
          const handleSubmit = event => {
                    event.preventDefault();
                    const email = emailRef.current.value;
                    const password = passwordRef.current.value;
                    signInWithEmailAndPassword(email, password)
          }
          if(loading || gLoading){
                    return <Loading></Loading>
          }
         
          if (pUser || token) {
                    console.log(token)
      navigate(from, { replace:true})

         
          }
          if(loading || gLoading ){
                    <Loading></Loading>
          }
          if(error || gError){
                   singInError = <p className='text-error'><small>{error?.message || gError?.message }</small></p>
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
                                             {singInError}
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