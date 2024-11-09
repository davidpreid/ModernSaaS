import React from 'react';
import { ArrowUpRight, Users, Package, CreditCard } from 'lucide-react';

const stats = [
  {
    name: 'Total Users',
    value: '2,451',
    change: '+12.5%',
    icon: Users,
  },
  {
    name: 'Active Modules',
    value: '8',
    change: '+2.1%',
    icon: Package,
  },
  {
    name: 'Revenue',
    value: '$45,231',
    change: '+15.3%',
    icon: CreditCard,
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">
          Welcome back! Here's what's happening with your organization today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {stat.change}
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            {/* Activity content would go here */}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            {/* Quick actions would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}