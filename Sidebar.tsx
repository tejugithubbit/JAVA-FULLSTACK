import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building2, Receipt, PieChart, Users, Settings, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-64 bg-indigo-800 min-h-screen p-4 text-white">
      <div className="flex items-center gap-2 mb-8">
        <Building2 className="w-8 h-8" />
        <h1 className="text-xl font-bold">ExpenseHub</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
            }`
          }
        >
          <PieChart className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
            }`
          }
        >
          <Receipt className="w-5 h-5" />
          <span>Expenses</span>
        </NavLink>
        
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
            }`
          }
        >
          <Users className="w-5 h-5" />
          <span>Team</span>
        </NavLink>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-indigo-700' : 'hover:bg-indigo-700'
            }`
          }
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </nav>
      
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-indigo-700 mt-auto absolute bottom-4"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;