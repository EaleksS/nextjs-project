import axios from 'axios';
import { BASE_URL } from '@/http/index';
import { IUser } from '@/types/AuthTypes';

export const Users = {
  async getUpdateUser(
    city: string | null,
    date_of_birth: string | null,
    email: string | null,
    firstname: string | null,
    lastname: string | null,
    phone: string | null,
    state: string | null,
    username: string | null
  ) {
    const response = await axios.put(`${BASE_URL}/api/users/update/${email}`, {
      city: city,
      date_of_birth: date_of_birth,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      state: state,
      username: username,
    });
    return response;
  },

  async getImageUser() {
    const response = await axios.get(`${BASE_URL}/api/image/profileImage`);
    return response;
  },
};
