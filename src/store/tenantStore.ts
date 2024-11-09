import { create } from 'zustand';

interface TenantConfig {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  domain: string;
}

interface TenantState {
  config: TenantConfig;
  setConfig: (config: Partial<TenantConfig>) => void;
}

export const useTenantStore = create<TenantState>((set) => ({
  config: {
    name: 'Acme Corp',
    logo: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=150',
    primaryColor: '#2563eb',
    secondaryColor: '#4f46e5',
    domain: 'acme.example.com',
  },
  setConfig: (newConfig) =>
    set((state) => ({ config: { ...state.config, ...newConfig } })),
}));