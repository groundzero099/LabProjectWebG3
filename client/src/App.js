
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminAddUser from './pages/AdminAddUser';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';
import { useEffect, useState } from 'react';

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
  }, [role]);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/' element={<Register></Register>}></Route> */}
        <Route path="/dashboard"
            element={ 
               isLoggedIn==="true"?
               role === 'admin' ? (
                <AdminDashboard />
              ) : role === 'faculty'? (
                <TeacherDashboard />
              ) : 
              <StudentDashboard /> : 
              <Login></Login>
            }
          />
        <Route path="/profile" element={<StudentProfile />}/>
        <Route path='/add-user' element={<AdminAddUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
