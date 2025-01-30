import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Welcome to your dashboard! Here you can manage your data and settings.</p>
          {/* Add more dashboard content here */}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
