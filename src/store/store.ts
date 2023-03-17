import { Auth } from '@/services/auth.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

axios.defaults.headers.common['content-type'] = 'application/json';

export const useAuthStore = create(
  persist<IAuthStore>(
    (set, get) => ({
      user: null,
      userInfo: {
        email: '',
        login: '',
        username: '',
        lastname: '',
        phone: '',
        disease: '',
        country: '',
        city: '',
        family: '',
      },
      getLogin: (email, password) => {
        // const response = Auth.getAuthLogin(email, password);
        // console.log(response);
        set({ user: { email: email, password: password } });
      },
      setUserInfo: (
        email,
        login,
        username,
        lastname,
        phone,
        disease,
        country,
        city,
        family
      ) => {
        set({
          userInfo: {
            email: email,
            login: login,
            username: username,
            lastname: lastname,
            phone: phone,
            disease: disease,
            country: country,
            city: city,
            family: family,
          },
        });
      },
      getLogout: () => {
        set({
          user: null,
          userInfo: {
            email: '',
            login: '',
            username: '',
            lastname: '',
            phone: '',
            disease: '',
            country: '',
            city: '',
            family: '',
          },
        });
      },
      getRegister: (email, password) => {
        const response = Auth.getAuthRegister(email, password);
        console.log(response);
      },
      getConfirmRegister: (email, password) => {
        const response = Auth.getAuthConfirmRegister(email, password);
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
      getSessionUser: (email: string) => {
        const response = Auth.getAuthSessionUser(email);
        console.log(response);
      },
      getVerifyAccount: (email: string) => {
        const response = Auth.getAuthVerifyAccount(email);
        console.log(response);
      },
    }),
    { name: 'ToDoLocalStorage' }
  )
);
