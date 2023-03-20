import { Auth } from '@/services/auth.service';
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

type useEntriesStore = {
  entries: IEntries[];
  addEntries: (entries: IEntries) => void;
};

export const useEntriesStore = create(
  persist<useEntriesStore>(
    (set, get) => ({
      entries: [
        {
          id: 1,
          name: 'Эрнест',
          lead: 'Егор Сергеевич',
          specialty: 'Врач',
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
    }),
    { name: 'ToDoLocalStorage' }
  )
);
