import React, { useEffect, useState } from 'react';

const CourseApi = () => {
  
  const [courses, setCourse] = useState([]); 
  useEffect(()=>{
    fetch("http://localhost:5000/api/users/course/")
    .then(res=>res.json())
    .then(data=>setCourse(data)); 
  },[courses, setCourse])

};

export default CourseApi;