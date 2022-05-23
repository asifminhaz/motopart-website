import React from 'react';

const BuisnessSumary = () => {
          return (
                    <div className='text-center justify-items-center'>
                              <h1 className='text-center font-3xl font-bold m-10'>Business Summary</h1>
                              <div className="stats stats-vertical lg:stats-horizontal shadow ">

                                        <div className="stat">
                                                  <div className="stat-title font-bold">Company Revenue</div>
                                                  <div className="stat-value">31K</div>
                                                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                                        </div>

                                        <div className="stat">
                                                  <div className="stat-title font-bold">Clients</div>
                                                  <div className="stat-value">4,200</div>
                                                  <div className="stat-desc">↗︎ 400 (22%)</div>
                                        </div>

                                        <div className="stat">
                                                  <div className="stat-title font-bold">Supply Countries</div>
                                                  <div className="stat-value">30</div>
                                                  <div className="stat-desc">↘︎ 90 (14%)</div>
                                        </div>

                              </div>
                    </div>
          );
};

export default BuisnessSumary;