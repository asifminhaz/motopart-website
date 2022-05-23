import React from 'react';

const BuisnessSumary = () => {
          return (
                    <div className='text-center justify-items-center'>
                             <h1 className='text-center font-3xl font-bold m-10'>Business Summary</h1> 
                             <div class="stats stats-vertical lg:stats-horizontal shadow ">
  
  <div class="stat">
    <div class="stat-title font-bold">Company Revenue</div>
    <div class="stat-value">31K</div>
    <div class="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title font-bold">Clients</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title font-bold">Supply Countries</div>
    <div class="stat-value">30</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
                    </div>
          );
};

export default BuisnessSumary;