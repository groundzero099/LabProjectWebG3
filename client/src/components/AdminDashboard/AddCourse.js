import React, { useEffect, useState } from 'react';
import logo from '../../assets/seu_low.png';
import axios from 'axios'
import Layout from './Layout';

export default function AddCourse() {
  const [courseCode, setCourseCode] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courses, setCourse] = useState([]); 

  useEffect(()=>{
    fetch("http://localhost:5000/api/users/course/")
    .then(res=>res.json())
    .then(data=>setCourse(data)); 
  },[courses])

  async function handleSubmit(e) {
    e.preventDefault();
    if (courseCode && courseTitle) {
      // console.log(courseCode, courseTitle); 
      await axios.post("http://localhost:5000/api/users/course/",{
        courseCode, courseTitle
      })
      .then(res=>{
        console.log(res.data.status); 
        if(res.data.status==="ok"){
          alert("Added Course");
          e.target.reset(); 
        }
        if(res.data.status==="error"){
          alert("Course Already Added");   
        }
      })
      .catch(e=>{
        alert("Server Error"); 
        console.log(e); 
      })
    }
  }
 
  const handleOrderDelete = (id) =>{
    const proceed = window.confirm('Are you sure you want to delete this Course'); 
    if(proceed) {
      const url = `http://localhost:5000/api/users/course/${id}`;
      fetch(url,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{  
        const remaining =  courses.filter(item=>item._id !== id);
        setCourse(remaining); 
        alert('Successfully deleted'); 
      })
    } 
  }

  return (
    <Layout>
    <div className="md:flex justify-center items-center mt-10">
      <div className="mx-auto md:flex mb-20 justify-between items-center animate-zoomIn  bg-white px-20 py-6 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit} className="w-96 mx-auto">
          <img className="w-24 mx-auto mt-0 md:-mt-14" src={logo} alt="seu_logo"/>
          <h2 className="mb-6 mt-4 text-3xl font-bold text-center ">Add Course</h2>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="course-code"
                id="course_code"
                onChange={(e) => setCourseCode(e.target.value)}
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="course_code"
                className="peer-focus:font-medium left-0 absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Course Code
              </label>
            </div>
            
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="course-title"
              id="course_title"
              onChange={(e) => setCourseTitle(e.target.value)}
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="course_title"
              className="peer-focus:font-medium 
              absolute text-sm left-0 text-gray-500 duration-300 transform 
              -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0
              peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
              peer-focus:scale-75 peer-focus:-translate-y-6">
              Course Title
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 disabled:cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
            Add
          </button>
        </form>
      </div>
    </div>

    <div className='ml-40 mr-40 '>
      <div class="bg-gray-100 ">
        <table class=" text-left left w-full ">
          <thead className='text-left bg-gray-50 border-b-2 border-gray-200 '>
            <tr >
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {courses.map((course,index)=>( 
              <tbody className='m-4'>
                <tr className='bg-white-800  p-5 rounded-md shadow'>
                  <td className='text-sm text-gray-700 p-3'>{index+1}</td>
                  <td className='pt-4 p-2'>{course.courseCode}</td>
                  <td>{course.courseTitle}</td>
                  <button onClick={()=>handleOrderDelete(course._id)} className='btn btn-xs btn-error mt-2'>Delete</button>
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
