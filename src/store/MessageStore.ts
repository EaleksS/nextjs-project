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
  answer: string | null;
  date: Date | string;
}

export interface IMessage {
  id: number;
  name: string;
  fix: boolean;
  messages: IMessages[];
}

type useMessageStore = {
  message: IMessage[];
  addMessages: (message: string, id: number) => void;
  changeMessage: (message: string, idMess: number, id: number) => void;
  deleteMessage: (idMess: number, id: number) => void;
  answerMessage: (message: string, messageAnswer: string, id: number) => void;
};

export const useMessageStore = create(
  persist<useMessageStore>(
    (set, get) => ({
      message: [
        {
          id: 1,
          name: 'Олег',
          fix: false,
          messages: [],
        },
        {
          id: 2,
          name: 'Саша',
          fix: true,
          messages: [],
        },
        {
          id: 3,
          name: 'Георгий',
          fix: false,
          messages: [
            {
              id: 1,
              me: true,
              message: 'Привет',
              answer: null,
              date: new Date(),
            },
            {
              id: 2,
              me: false,
              message: 'Как дела?',
              answer: null,
              date: new Date(),
            },
          ],
        },
      ],
      addMessages: (message, id) => {
        get().message.forEach((e) => {
          if (e.id === id) {
            e.messages.push({
              id: Math.random(),
              me: true,
              message: message,
              answer: null,
              date: new Date(),
            });
          }
        });

        set({ message: get().message });
      },
      changeMessage: (message, idMess, id) => {
        get().message.map((e) => {
          if (e.id === Number(idMess)) {
            return (e.messages = e.messages.map((j) => {
              if (j.id === id) {
                return {
                  id: j.id,
                  me: j.me,
                  message: message,
                  answer: j.answer,
                  date: j.date,
                };
              }
              return j;
            }));
          }
        });

        set({
          message: get().message,
        });
      },
      deleteMessage: (idMess, id) => {
        get().message.map((e) => {
          if (e.id === Number(idMess)) {
            return (e.messages = e.messages.filter((j) => {
              if (j.id === id) {
                return false;
              }
              return true;
            }));
          }
        });

        set({
          message: get().message,
        });
      },
      answerMessage: (message, messageAnswer, id) => {
        get().message.forEach((e) => {
          if (e.id === Number(id)) {
            e.messages.push({
              id: Math.random(),
              me: true,
              message: message,
              answer: messageAnswer,
              date: new Date(),
            });
          }
        });
        set({ message: get().message });
      },
    }),

    { name: 'useMessageStore' }
  )
);
