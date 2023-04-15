import { Auth } from '@/services/auth.service';
import { Center } from '@/services/center.service';
import { Doctor } from '@/services/doctor.service';
import { Geo } from '@/services/geo.service';
import { Users } from '@/services/users.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IEntries {
  id: number;
  name: string;
  lead: string;
  specialty: string;
  date: string;
  begin: string;
  end: string;
  address: string;
  translator: boolean;
  giveOneDayNotice: boolean;
  lang: string;
  center: string;
}

interface IDoctors {
  averageRating: number;
  centreName: string;
  shiftEnd: string;
  shiftStart: string;
  type: string;
  user: {
    city: string;
    date_of_birth: string;
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    password: string;
    phone: string;
    role: string;
    state: string;
    username: string;
  };
}

interface IDoctor2 {
  id: number;
  username: string;
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  city: string;
  state: string;
  date_of_birth: string;
  phone: string;
  role: string;
}

type useEntriesStore = {
  entries: null | IEntries[];
  addEntries: (entries: IEntries) => void;
  isDoctors: null | IDoctor2[];
  getIsDoctors: (centerName?: string, type?: string) => void;
  isLocation: null | { lat: number; lng: number };
  getGeoLocation: (address: string) => void;
};

export const useEntriesStore = create(
  persist<useEntriesStore>(
    (set, get) => ({
      entries: [
        {
          id: 1,
          name: 'Эрнест',
          lead: 'Егор Сергеевич',
          specialty: 'Доктор',
          date: '2023-03-30',
          begin: '14:00',
          end: '15:00',
          address: 'Russia, Yakutsk',
          translator: false,
          giveOneDayNotice: false,
          lang: 'ru',
          center: 'center',
        },
      ],
      addEntries: (entries) => {
        set({ entries: [...get().entries, entries] });
      },
      isDoctors: null,
      getIsDoctors: () => {
        Doctor.getAllDoctor().then((res) => set({ isDoctors: res.data }));
      },
      isLocation: null,
      getGeoLocation: (address) => {
        Geo.GeoLocation(address).then((res) =>
          set({ isLocation: res.data.results[0].geometry.location })
        );
      },
    }),
    { name: 'useEntriesStore' }
  )
);
