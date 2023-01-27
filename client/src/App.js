
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminAddUser from './pages/AdminAddUser';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/dashboard"
            element={
                  <AdminDashboard />
                  // <TeacherDashboard/>
                  // <StudentDashboard />
                }
          />

        <Route path="/profile" element={<StudentProfile />}/>
        <Route path='/add-user' element={<AdminAddUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
