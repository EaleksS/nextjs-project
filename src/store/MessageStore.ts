import { Auth } from '@/services/auth.service';
import { Users } from '@/services/users.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IMessages {
  id: number;
  me: boolean;
  message: string;
}

export interface IMessage {
  id: number;
  message: string;
  name: string;
  fix: boolean;
  messages: IMessages[];
}

type useMessageStore = {
  message: IMessage[];
  addMessages: (message: string, id: number) => void;
  changeMessage: (message: string, idMess: number, id: number) => void;
};

export const useMessageStore = create(
  persist<useMessageStore>(
    (set, get) => ({
      message: [
        {
          id: 1,
          message: 'Я созванивались с ней и не один раз, она ведет себя ',
          name: 'Олег',
          fix: false,
          messages: [
            {
              id: 1,
              me: true,
              message: 'Привет',
            },
            {
              id: 2,
              me: false,
              message: 'Как дела?',
            },
            {
              id: 3,
              me: true,
              message: 'Хорошо',
            },
            {
              id: 4,
              me: false,
              message: 'Что делаешь?',
            },
            {
              id: 5,
              me: true,
              message: 'Ничего',
            },
            {
              id: 6,
              me: false,
              message: 'Понятно',
            },
          ],
        },
        {
          id: 2,
          message: 'Попробуй так',
          name: 'Саша',
          fix: true,
          messages: [
            {
              id: 1,
              me: true,
              message: 'Привет',
            },
            {
              id: 2,
              me: false,
              message: 'Как дела?',
            },
            {
              id: 3,
              me: true,
              message: 'Хорошо',
            },
            {
              id: 4,
              me: false,
              message: 'Что делаешь?',
            },
            {
              id: 5,
              me: true,
              message: 'Ничего',
            },
            {
              id: 6,
              me: false,
              message: 'Понятно',
            },
          ],
        },
        {
          id: 3,
          message: 'Не было сообщений',
          name: 'Георгий',
          fix: false,
          messages: [
            {
              id: 1,
              me: true,
              message: 'Привет',
            },
            {
              id: 2,
              me: false,
              message: 'Как дела?',
            },
            {
              id: 3,
              me: true,
              message: 'Хорошо',
            },
            {
              id: 4,
              me: false,
              message: 'Что делаешь?',
            },
            {
              id: 5,
              me: true,
              message: 'Ничего',
            },
            {
              id: 6,
              me: false,
              message: 'Понятно',
            },
          ],
        },
      ],
      addMessages: (message, id) => {
        get().message.forEach((e) => {
          if (e.id === id) {
            e.messages.push({ id: Math.random(), me: true, message: message });
          }
        });

        set({ message: get().message });
      },
      changeMessage: (message, idMess, id) => {
        get().message.map((e) => {
          if (e.id === Number(idMess)) {
            return (e.messages = e.messages.map((j) => {
              if (j.id === id) {
                return { id: j.id, me: j.me, message: message };
                // e.messages.splice(index, 1);
              }
              return j;
            }));
          }
        });

        set({
          message: get().message,
        });
      },
    }),
    { name: 'useMessageStore' }
  )
);
