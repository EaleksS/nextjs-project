import { Auth } from '@/services/auth.service';
import { Center } from '@/services/center.service';
import { Users } from '@/services/users.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ICenter {
  address: string;
  city: string;
  description: string;
  name: string;
  rating: number;
  state: string;
}

type useSearchStore = {
  isCenter: null | ICenter[];
  getAllCenter: () => void;
};

export const useSearchStore = create(
  persist<useSearchStore>(
    (set, get) => ({
      isCenter: null,
      getAllCenter: () => {
        Center.getAllCenter().then((res) => set({ isCenter: res.data }));
      },
    }),
    { name: 'useSearchStore' }
  )
);
