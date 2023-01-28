import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
import Layout from './Layout';

export default function StudentCourse() {
  const navigate = useNavigate();
  const [courses, setCourse] = useState([]); 

  useEffect(()=>{
    fetch("http://localhost:5000/api/users/course/")
    .then(res=>res.json())
    .then(data=>setCourse(data)); 
  },[courses])

  const handleAttendance = (id)=>{
    window.localStorage.setItem("course-id", id); 
    const url = `/attendance/${id}`; 
    navigate(url); 
  }

  return (
    <Layout>
    <div className='ml-40 mr-40 mt-10'>
      <div class="bg-gray-100 ">
        <table class=" text-left left w-full ">
          <thead className='text-left bg-gray-50 border-b-2 border-gray-200 '>
            <tr >
              <th className='ml-4'>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Attendance</th>
            </tr>
          </thead>

            {courses.map((course,index)=>( 
              <tbody className='m-4'>
                <tr className='bg-white-800  p-5 rounded-md shadow'>
                  <td className='text-sm text-gray-700 p-3'>{index+1}</td>
                  <td className='pt-4 p-2'>{course.courseCode}</td>
                  <td>{course.courseTitle}</td>
                  <td>
                    <button onClick={()=>handleAttendance(course._id)}   class="btn btn-sm bg-white peer-focus:bg-green">Click</button>
                  </td>
                </tr>
                </tbody>
              ))
            }
        </table>
      </div>
    </div>
    </Layout>
  );
}
