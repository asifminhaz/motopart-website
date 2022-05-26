import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
          const { _id, image, discription, price, name, availablequantity, minimumorderquantity } = tool
          console.log(tool)
          const navigate = useNavigate()
          // const [product, setProduct] = useState([])
          const navigateToToolDetail = _id => {
          navigate(`/tool/${_id}`)

          }

          // add product api
          // fetch('http://localhost:5000/product', {
          //           method: 'POST',
          //           headers: {
          //               'content-type': 'application/json',
          //               authorization: `Bearer ${localStorage.getItem('accessToken')}`
          //           },
          //           body: JSON.stringify(product)
          //       })
          //       .then(res =>res.json())
          //       .then(data => setProduct(data) )
          return (
                    <div className="card w-96 bg-base-100 shadow-xl">
                              <figure className="px-10 pt-10">
                                        <img src={image} alt="Shoes" className="rounded-xl" />
                              </figure>
                              <div className="card-body items-center text-center">
                                        <h2 className="card-title">{name}</h2>
                                        <p>{discription}</p>
                                        <p className='font-bold'>Available Quantity:{availablequantity}</p>
                                        <p className='font-bold'>Minimum Order: {minimumorderquantity}</p>
                                        <p className='font-bold'>Price:{price}</p>
                                        <div className="card-actions">
                                                  <button onClick={() => navigateToToolDetail (_id)} className="btn btn-primary">Purchase</button>
                                        </div>
                              </div>
                    </div>
          );
};

export default Tool;