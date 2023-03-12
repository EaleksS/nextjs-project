import { Auth } from '@/services/auth.service';
import { IAuthStore } from '@/types/StoreTypes';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

axios.defaults.headers.common['content-type'] = 'application/json';

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  getLogin: (email, password) => {
    const response = Auth.getAuthLogin(email, password);
    console.log(response);
    // set({user: response})
  },
  getRegister: (email, phone, username, password) => {
    const response = Auth.getAuthRegister(email, phone, username, password);
    console.log(response);
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
  getSessionUser: (email: string) => {
    const response = Auth.getAuthSessionUser(email);
    console.log(response);
  },
  getVerifyAccount: (email: string) => {
    const response = Auth.getAuthVerifyAccount(email);
    console.log(response);
  },
}));
