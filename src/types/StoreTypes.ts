import { IUser, IUserInfo } from './AuthTypes';

export type IAuthStore = {
  user: IUser | null;
  userInfo: IUserInfo;
  getLogin: (email: string, password: string) => void;
  setUserInfo: (
    email: string,
    login: string,
    username: string,
    lastname: string,
    phone: string,
    disease: string,
    country: string,
    city: string,
    family: string
  ) => void;
  getLogout: () => void;
  getRegister: (email: string, password: string) => void;
  getConfirmRegister: (email: string, password: string) => void;
  // getConfirmRegister: (email: string) => void;
  getDenyRegister: (reply: string) => void;
  getAllRegRequest: () => void;
  getlLogout: () => void;
  getSessionUser: (email: string) => void;
  getVerifyAccount: (email: string) => void;
};
