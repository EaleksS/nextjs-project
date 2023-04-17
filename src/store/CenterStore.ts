import { Center } from '@/services/center.service';
import { Doctor } from '@/services/doctor.service';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type useDoctorStore = {
  isCode: null | number | string;
  getRegisterCentre: (
    address: string,
    city: string,
    description: string,
    name: string,
    rating: number,
    state: string
  ) => void;
};

export const useCenterStore = create(
  devtools<useDoctorStore>((set) => ({
    isCode: null,
    getRegisterCentre: (address, city, description, name, rating, state) => {
      Center.getRegisterCentre(address, city, description, name, rating, state)
        .then((res) => {
          set({
            isCode: res.status,
          });

          setTimeout(() => {
            set({ isCode: null });
          }, 5000);
        })
        .catch(({ code }: any) => {
          set({ isCode: code });
          setTimeout(() => {
            set({ isCode: null });
          }, 5000);
        });
    },
  }))
);
