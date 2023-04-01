import { IUser, IUserInfo } from './AuthTypes';

export type IAuthStore = {
  isLang: string;
  setIsLang: (lang: string) => void;
  user: IUser | null;
  userInfo: IUserInfo | null;
  statusLogin: null | number;
  setStatusLogin: () => void;
  statusRegister: null | number;
  setStatusRegister: () => void;
  getLogin: (email: string, password: string) => void;
  setUserInfo: (
    city: string | null,
    date_of_birth: string | null,
    email: string | null,
    firstname: string | null,
    id: number | null,
    isFirstLog: string | null,
    lastname: string | null,
    phone: string | null,
    role: string | null,
    state: string | null,
    username: string | null
  ) => void;
  getLogout: () => void;
  getRegister: (email: string, password: string) => void;
  getConfirmRegister: (email: string) => void;
  // getConfirmRegister: (email: string) => void;
  getDenyRegister: (reply: string) => void;
  getAllRegRequest: () => void;
  getlLogout: () => void;
  getSessionUser: () => void;
  getVerifyAccount: (email: string) => void;
  getUpdateUser: (
    city: string | null,
    date_of_birth: string | null,
    email: string | null,
    firstname: string | null,
    lastname: string | null,
    phone: string | null,
    state: string | null,
    username: string | null,
    role: string | null
  ) => void;
  isImage: null | string;
  getImageUser: (id: number) => void;
  getAddImagerUser: (formData: any) => void;
};
