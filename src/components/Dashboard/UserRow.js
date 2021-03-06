import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const UserRow = ({ user, refetch }) => {
  const { email, role } = user
  const makeAdmin = () => {
    fetch(`https://young-badlands-79031.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('Failed to make an admin')
        }
        res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          toast.success('Successfully make an admin from user')

        }
      })
  }
  <Toaster />
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs">Remove user</button></td>
    </tr>
  );
};

export default UserRow;