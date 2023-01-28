import React, { useEffect, useState } from 'react';
import logo from '../../assets/seu_low.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
import Layout from './Layout';

export default function AddCourse() {
  const [users, setUsers] = useState([]); 

  useEffect(()=>{
    fetch("http://localhost:5000/api/users/")
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[users])

  return (
    <Layout>
    <div className='ml-40 mr-40 mt-20'>
      <div className="mr-6 text-left">
        <h2 className="text-2xl pb-3 font-semibold mb-2">All User</h2>
      </div>
      <div class="bg-gray-100 ">
        <table class=" text-left left w-full ">
          <thead className='text-left bg-gray-50 border-b-2 border-gray-200 '>
            <tr >
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {users.map((user,index)=>( 
              <tbody className='m-4'>
                <tr className='bg-white-800  p-5 rounded-md shadow'>
                  <td className='text-sm text-gray-700 p-3'>{index+1}</td>
                  <td className='pt-4 p-2 '>{user.username}</td>
                  <td >{user.email}</td>
                  <td className='font-medium '>{user.role}</td>
                </tr>
                </tbody>
              ))
            }
          {/* </tbody> */}
        </table>
      </div>
    </div>
    </Layout>
  );
}
