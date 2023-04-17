import { Doctor } from '@/services/doctor.service';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type useDoctorStore = {
  isCode: null | number;
  getRegister: (
    username: string,
    password: string,
    email: string,
    phone: string,
    shiftEnd: Date | string,
    shiftStart: Date | string,
    centerName: string,
    type: string
  ) => void;
};

export const useDoctorStore = create(
  persist<useDoctorStore>(
    (set) => ({
      isCode: null,
      getRegister: (
        username,
        password,
        email,
        phone,
        shiftEnd,
        shiftStart,
        centerName,
        type
      ) => {
        Doctor.getRegister(
          username,
          password,
          email,
          phone,
          shiftEnd,
          shiftStart,
          centerName,
          type
        )
          .then((res) => {
            set({
              isCode: res.status,
            });
            setTimeout(() => {
              set({ isCode: null });
            }, 5000);
          })
          .catch(({ code }) => {
            set({ isCode: code });
            setTimeout(() => {
              set({ isCode: null });
            }, 5000);
          });
      },
    }),
    { name: 'useEntriesStore' }
  )
);
