import AdminSidePanel from '@/components/admin/AdminSidePanel';
import RightPanel from '@/components/admin/RightPanle';
import AdminHeader from '@/components/YvHeader';
import React from 'react';

const AdminPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidePanel />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader />

        {/* Right Panel */}
        <RightPanel />
      </div>
    </div>
  );
};

export default AdminPage;
