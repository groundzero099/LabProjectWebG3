
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        {/* <Route path="/"
            element={
                  <AdminDashboard />
                  // <StudentDashboard />
                }
          /> */}
      </Routes>
    </div>
  );
}

export default App;
