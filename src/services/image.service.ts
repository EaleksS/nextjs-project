import axios from 'axios';
import { BASE_URL } from '@/http/index';

export const Image = {
  async getImageUser(id: number) {
    return axios.get(`${BASE_URL}/api/image/profileImage?id=${id}`, {
      responseType: 'blob',
    });
  },

  async getAddImagerUser(formData: any) {
    return axios.post(`${BASE_URL}/api/image/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
