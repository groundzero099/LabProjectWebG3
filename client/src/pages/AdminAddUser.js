import React from 'react';
import Dashboard from '../components/AdminDashboard/Dashboard';
import AddUser from '../components/AdminDashboard/AddUser';
import Layout from '../components/AdminDashboard/Layout';

export default function AdminDashboard() {

  return (
    <Layout>
      <AddUser />
    </Layout>
  );
}
