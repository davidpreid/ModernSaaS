import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  tenantId: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      email,
      name: 'John Doe',
      role: 'admin',
      tenantId: 'tenant-1',
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));