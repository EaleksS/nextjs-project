import { Auth } from '@/services/auth.service';
import { Users } from '@/services/users.service';
import { Image } from '@/services/image.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { log } from 'console';

axios.defaults.headers.common['content-type'] = 'application/json';

export const useAuthStore = create(
  persist<IAuthStore>(
    (set, get) => ({
      isLang: '',
      setIsLang: (lang) => {
        set({ isLang: lang });
      },
      user: null,
      userInfo: null,
      statusRegister: null,
      setStatusRegister: () => {
        set({ statusRegister: null });
      },
      statusLogin: null,
      setStatusLogin: () => {
        set({ statusLogin: null });
      },
      getLogin: (email, password) => {
        if (email === 'test@mail.ru' && password === '12345678') {
          set({
            user: { email: 'test@mail.ru' },
            statusLogin: 200,
            userInfo: {
              city: 'Москва',
              date_of_birth: '20.20.20',
              email: 'test@mail.ru',
              firstname: 'Макс',
              id: 0,
              isFirstLog: 'Тест',
              lastname: 'Максимович',
              phone: '899999999',
              role: null,
              state: 'Россия',
              username: 'username',
            },
          });
        } else {
          Auth.getAuthLogin(email, password).then((res) => {
            set({
              user: { email: res.data.email },
              statusLogin: res.status,
            });
            console.log(res);
            get().setUserInfo(
              res.data.city,
              res.data.date_of_birth,
              res.data.email,
              res.data.firstname,
              res.data.id,
              res.data.isFirstLog,
              res.data.lastname,
              res.data.phone,
              res.data.role,
              res.data.state,
              res.data.username
            );
          });
        }

        // Users.getImageUser().then((res) => {
        //   console.log(res);
        // });
      },
      setUserInfo: (
        city,
        date_of_birth,
        email,
        firstname,
        id,
        isFirstLog,
        lastname,
        phone,
        role,
        state,
        username
      ) => {
        set({
          userInfo: {
            city: city,
            date_of_birth: date_of_birth,
            email: email,
            firstname: firstname,
            id: id,
            isFirstLog: isFirstLog,
            lastname: lastname,
            phone: phone,
            role: role,
            state: state,
            username: username,
          },
        });
      },
      getLogout: () => {
        set({
          user: null,
          userInfo: null,
          isImage: null,
        });
      },
      getRegister: (email, password) => {
        Auth.getAuthRegister(email, password).then((res) =>
          set({ statusRegister: res.status })
        );
      },
      getConfirmRegister: (email) => {
        const response = Auth.getAuthConfirmRegister(email);
        console.log(response);
      },
      getDenyRegister: (reply: string) => {
        const response = Auth.getAuthDenyRegister(reply);
        console.log(response);
      },
      getAllRegRequest: () => {
        const response = Auth.getAuthAllRegRequest();
        console.log(response);
      },
      getlLogout: () => {
        const response = Auth.getAuthlLogout();
        console.log(response);
      },
      getSessionUser: () => {
        const response = Auth.getAuthSessionUser();
        console.log(response);
      },
      getVerifyAccount: (email: string) => {
        const response = Auth.getAuthVerifyAccount(email);
        console.log(response);
      },
      getUpdateUser: (
        city,
        date_of_birth,
        email,
        firstname,
        lastname,
        phone,
        state,
        username,
        role
      ) => {
        Users.getUpdateUser(
          city,
          date_of_birth,
          email,
          firstname,
          lastname,
          phone,
          state,
          username,
          role
        );
      },
      isImage: null,
      getImageUser: (id) => {
        Image.getImageUser(id).then((resp) => {
          if (resp.data.size !== 0) {
            const url = URL.createObjectURL(resp.data);
            set({ isImage: url });
          }
        });
      },
      getAddImagerUser: (formData) => {
        Image.getAddImagerUser(formData).then((resp) => {
          if (resp.status === 200) {
            get().getImageUser(Number(get().userInfo?.id));
          }
        });
      },
    }),
    { name: 'useAuthStore' }
  )
);
