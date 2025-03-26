import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { PieChart, TrendingUp, Users, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const user = useSelector((state: RootState) => state.auth.user);

  // Mock data for demonstration
  const stats = {
    totalExpenses: expenses.reduce((acc, curr) => acc + curr.amount, 0),
    pendingApprovals: expenses.filter(e => e.status === 'pending').length,
    activeUsers: 24,
    monthlyTrend: '+12.5%'
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}</h1>
        <p className="text-gray-600">Here's what's happening with your expenses today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-2xl font-semibold text-gray-900">₹{stats.totalExpenses.toLocaleString('en-IN')}</p>
            </div>
            <div className="p-3 bg-indigo-100 rounded-full">
              <PieChart className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Trend</p>
              <p className="text-2xl font-semibold text-green-600">{stats.monthlyTrend}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-semibold text-orange-600">{stats.pendingApprovals}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-full">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Recent Expenses</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-medium text-gray-500">
                  <th className="pb-3">Description</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-900">
                {expenses.slice(0, 5).map((expense, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3">{expense.description}</td>
                    <td className="py-3">₹{expense.amount.toLocaleString('en-IN')}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        expense.status === 'approved' ? 'bg-green-100 text-green-800' :
                        expense.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {expense.status.charAt(0).toUpperCase() + expense.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Expense Categories</h2>
          <div className="space-y-4">
            {['Travel', 'Office Supplies', 'Software', 'Meals'].map((category, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{category}</span>
                    <span className="text-sm font-medium text-gray-900">
                      ₹{Math.floor(Math.random() * 100000).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;