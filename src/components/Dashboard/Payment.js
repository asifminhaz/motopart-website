import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
          const { id } = useParams();
          // const url = `https://young-badlands-79031.herokuapp.com/orders/${id}`
          // const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
          //           method: 'GET',
          //           headers: {
          //                     // 'content-type': 'application/json'
          //               'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          //           }
          //       }).then(res => res.json()));

          //       if (isLoading) {
          //           return <Loading></Loading>
          //       }
          return (
                    <div>
                              <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                                        <div class="card-body">
                                                  <p className="text-success font-bold">Hello, { }</p>
                                                  <h2 class="card-title">Please Pay for { }</h2>
                                                  <p>Your orders: <span className='text-orange-700'>{ }</span> </p>
                                                  {/* <p>Please pay: ${order.totalCost}</p> */}
                                        </div>
                              </div>
                              <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                                        {/* <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div> */}
                              </div>
                    </div>
          );
};

export default Payment;