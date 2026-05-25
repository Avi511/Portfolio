import { create } from 'zustand';

interface AppState {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  carSpeed: number;
  setCarSpeed: (speed: number) => void;
  cameraMode: 'follow' | 'cinematic' | 'overview';
  setCameraMode: (mode: 'follow' | 'cinematic' | 'overview') => void;
}

export const useStore = create<AppState>((set) => ({
  activeSection: null,
  setActiveSection: (section) => set({ activeSection: section }),
  carSpeed: 0,
  setCarSpeed: (speed) => set({ carSpeed: speed }),
  cameraMode: 'follow',
  setCameraMode: (mode) => set({ cameraMode: mode }),
}));
