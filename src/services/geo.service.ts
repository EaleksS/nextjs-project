import axios from 'axios';
import { BASE_URL } from '@/http/index';

export const Geo = {
  // Получение геоданных для Местоположения
  async GeoLocation(address: string) {
    return await axios.get(`${BASE_URL}/api/getGeoCoding/${address}`);
  },
};
