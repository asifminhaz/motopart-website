import React from 'react';

const Tool = ({ tool }) => {
          const { _id, image, discription, price, name, availablequantity, minimumorderquantity } = tool
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
                                                  <button className="btn btn-primary">Purchase</button>
                                        </div>
                              </div>
                    </div>
          );
};

export default Tool;