import { Center } from '@/services/center.service';
import { Doctor } from '@/services/doctor.service';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

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
  isSelectCenter: null | string;
  setIsSelectCenter: (center: string) => void;
};

export const useCenterStore = create(
  persist<useDoctorStore>(
    (set) => ({
      isCode: null,
      getRegisterCentre: (address, city, description, name, rating, state) => {
        Center.getRegisterCentre(
          address,
          city,
          description,
          name,
          rating,
          state
        )
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
      isSelectCenter: null,
      setIsSelectCenter: (center) => {
        set({ isSelectCenter: center });
      },
    }),
    { name: 'useCenterStore' }
  )
);
