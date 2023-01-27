import React, { useEffect } from 'react';
import Layout from '../components/StudentDashboard/Layout';
// import { useSelector } from 'react-redux';
import Profile from '../components/StudentDashboard/Profile';

export default function StudentProfile() {

  return (
    <Layout>
       <div className="container flex justify-center items-end bg-no-repeat bg-center bg-cover">
        <div
          className="bg-white w-2/4 h-3/4 rounded-t-[1rem] p-2"
          style={{ boxShadow: 'rgb(51 51 51 / 80%) 0px 0px 4px 500px;' }}>
          <Profile />
        </div>
      </div>
    </Layout>
  );
}
