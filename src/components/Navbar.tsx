import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useTenantStore } from '../store/tenantStore';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const { config } = useTenantStore();
  const { user } = useAuthStore();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={config.logo}
                alt={config.name}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5" />
            </button>
            <div className="relative ml-3">
              <div className="flex items-center space-x-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-700">{user?.name}</p>
                  <p className="text-gray-500">{user?.email}</p>
                </div>
                <User className="h-8 w-8 rounded-full bg-gray-100 p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}