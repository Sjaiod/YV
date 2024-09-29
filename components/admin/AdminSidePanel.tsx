// AdminSidePanel.tsx

import { Home, Settings, Users } from "lucide-react";
import Link from "next/link";

const AdminSidePanel = () => {
  return (
    <aside className="w-64 bg-gray-900 h-full fixed">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-white text-lg">Admin Dashboard</h1>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="group">
            <Link href="/admin/dashboard" className="flex items-center p-4 text-white hover:bg-gray-700">
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li className="group">
            <Link href="/admin/users" className="flex items-center p-4 text-white hover:bg-gray-700">
              <Users className="w-5 h-5 mr-3" />
              Users
            </Link>
          </li>
          <li className="group">
            <Link href="/admin/settings" className="flex items-center p-4 text-white hover:bg-gray-700">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidePanel;
