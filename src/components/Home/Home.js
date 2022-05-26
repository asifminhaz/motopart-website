import React from 'react';
import Review from '../Dashboard/Review';
import ShowReview from '../Dashboard/ShowReview';
import Banner from './Banner';
import BuisnessSumary from './BuisnessSumary';
import Special from './Special';
import Tools from './Tools';
import Upcoming from './Upcoming';

const Home = () => {
          return (
                    <div>
                           <Banner></Banner>
                           <Tools></Tools>
                           <BuisnessSumary></BuisnessSumary>
                           <Upcoming></Upcoming>
                           <Special></Special>
                           <ShowReview></ShowReview>
                           
                    </div>
          );
};

export default Home;