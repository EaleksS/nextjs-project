import axios from 'axios';
import { BASE_URL } from '@/http/index';
import { IUser } from '@/types/AuthTypes';

export const Auth = {
  async getAuthLogin(email: string, password: string) {
    const response = await axios.post(
      `${BASE_URL}/api/auth/login`,
      {
        email: email,
        password: password,
      },
      {
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    );
    return response;
  },

  async getAuthRegister(email: string, password: string) {
    const response = await axios.post(`${BASE_URL}/api/auth/registerRequest`, {
      email: email,
      password: password,
    });
    return response;
  },
  async getAuthConfirmRegister(email: string) {
    const response = await axios.post(
      `${BASE_URL}/api/auth/confirmRegister/${email}`
    );
    return response;
  },

  async getAuthDenyRegister(reply: string) {
    const response = await axios.delete(
      `${BASE_URL}/api/auth/denyRegister/${reply}`
    );
    return response;
  },

  async getAuthAllRegRequest() {
    const response = await axios.get(`${BASE_URL}/api/auth/getAllRegRequest`);
    return response;
  },

  async getAuthlLogout() {
    const response = await axios.post(`${BASE_URL}/api/auth/logout`);
    return response;
  },

  async getAuthSessionUser() {
    const response = await axios.get(`${BASE_URL}/api/auth/sessionUser`);
    return response;
  },

  async getAuthVerifyAccount(email: string) {
    const response = await axios.put(
      `${BASE_URL}/api/auth/verifyAccount/${email}`,
      {},
      {
        headers: {
          Accept: '*/*',
        },
      }
    );
    return response;
  },
};
