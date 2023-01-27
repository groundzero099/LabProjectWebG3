import React from 'react';

import Dashboard from '../components/TeacherDashboard/Dashboard';
// import Dashboard from '../components/StudentDashboard/Dashboard';
import Layout from '../components/TeacherDashboard/Layout';

export default function TeacherDashboard() {
  document.title = 'Dashboard Page';
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
