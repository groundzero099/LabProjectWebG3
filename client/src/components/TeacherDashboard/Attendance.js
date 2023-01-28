import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
import Layout from './Layout';

export default function Attendance() {
  const {id} = useParams(); 
  const [courses, setCourse] = useState({}); 

  useEffect(()=>{
    axios.post(`http://localhost:5000/api/users/course/${id}`)
    .then(res=>res.json())
    .then(data=>setCourse(data));
  },[courses])

  return (
    <Layout>
      <div className='ml-40 mr-40 mt-10'>
        <div class="flex justify-center">
          <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{courses.courseCode}</h5>
            <p class="text-gray-700 text-base mb-4">{courses.courseTitle}</p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
