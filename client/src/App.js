
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import { useEffect, useState } from 'react';
import AddUser from './components/AdminDashboard/AddUser';
import AllUser from './components/AdminDashboard/AllUser';
import AddCourse from './components/AdminDashboard/AddCourse';
import Profile from './components/StudentDashboard/Profile';
import Course from './components/TeacherDashboard/Course';
import Attendance from './components/TeacherDashboard/Attendance';
import StudentCourse from './components/StudentDashboard/StudentCourse';

function App() {
  const [role, setRole] = useState('');
  const isLoggedIn = window.localStorage.getItem("loggedIn"); 
  useEffect(() => {
    setRole(''); 
    const loggedInUser = localStorage.getItem("role");
    if (loggedInUser) {
      console.log(loggedInUser); 
      setRole(loggedInUser);
    }
  }, [role, isLoggedIn]);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={ <Login></Login>}></Route>
        {/* <Route path='/' element={<Register></Register>}></Route> */}
        <Route path="/dashboard"
            element={ 
                  isLoggedIn === "true"?
                  role === 'admin' ? (<AdminDashboard />) : 
                  role === 'faculty'? (
                    <TeacherDashboard />) : 
                  <StudentDashboard /> : 
                  (<Login></Login>)
            }
          />
        <Route path="/course-list" element={<StudentCourse></StudentCourse>}></Route>
        <Route path="/student-profile" element={<Profile />}/> 
        
        <Route path='/add-user' element={<AddUser/>}></Route>
        <Route path='/add-course' element={<AddCourse/>}></Route>
        <Route path='/users' element={<AllUser/>}></Route>

        <Route path='/view-course' element={<Course/>}></Route>
        <Route path='/attendance/:id' element={<Attendance/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
