import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletingUser from './DeletingUser';
import UserRow from './UserRow';

const User = () => {

     const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://young-badlands-79031.herokuapp.com/user', {
          method: 'GET',
          headers: {
               authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
     }).then(res => res.json()))
     if (isLoading) {
          return <Loading></Loading>
     }
     return (
          <div>
               <h3>All Users:{users.length}</h3>
               <div class="overflow-x-auto">
                    <table class="table w-full">
                         {/* <!-- head --> */}
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Name</th>
                                   <th>make admin </th>
                                   <th>remove</th>
                              </tr>
                         </thead>
                         <tbody>
                              {/* <!-- row 1 --> */}
                              {
                                   users.map(user => <UserRow
                                        key={user._id}
                                        user={user}

                                        refetch={refetch}
                                   ></UserRow>)
                              }

                         </tbody>
                    </table>


               </div>
          </div>
     );
};

export default User;