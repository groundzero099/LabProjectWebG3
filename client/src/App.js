
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import Login from './pages/Login';
import StudentProfile from './pages/StudentProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path="/dashboard"
            element={
                  <AdminDashboard />
                  // <TeacherDashboard/>
                  // <StudentDashboard />
                }
          />

        <Route path="/profile"
            element={
                  <StudentProfile />
            }
        />
      </Routes>
    </div>
  );
}

export default App;
