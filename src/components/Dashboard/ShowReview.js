import React, { useEffect, useState } from 'react';

const ShowReview = () => {

  const [reviews, setReviews] = useState([])


  fetch('https://young-badlands-79031.herokuapp.com/reviews', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
  })
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    })





  return (
    <div>

      <h2 className=' text-2xl text-center font-bold p-10'>Client Reviews </h2>
      {
        reviews.slice(0, 3).map(review =>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Name: {review.name}</h2>
              <p className='font-bold'>Email: {review.email}</p>
              <p className='font-bold'>Comments: {review.discription}</p>
              <p className='font-bold'>
                <div class="rating">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                {review.rating}</p>

            </div>
          </div>
        )
      }



    </div>
  );
};

export default ShowReview;