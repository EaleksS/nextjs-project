import { IUser } from './AuthTypes';

export type IAuthStore = {
  user: IUser | null;
  getLogin: (email: string, password: string) => void;
  getRegister: (
    email: string,
    phone: string,
    username: string,
    password: string
  ) => void;
  getConfirmRegister: (
    email: string,
    phone: string,
    username: string,
    password: string
  ) => void;
  // getConfirmRegister: (email: string) => void;
  getDenyRegister: (reply: string) => void;
  getAllRegRequest: () => void;
  getlLogout: () => void;
  getSessionUser: (email: string) => void;
  getVerifyAccount: (email: string) => void;
};
