import axios from 'axios';
import { BASE_URL } from '@/http/index';

const now: Date = new Date();
const hoursToAdd: number = 4;

now.setHours(now.getHours() + hoursToAdd);

console.log(now);

export const Doctor = {
  async getAllDoctor() {
    return await axios.get(`${BASE_URL}/api/users/getAll/Doctor`);
  },

  async getRegister(
    username: string,
    password: string,
    email: string,
    phone: string,
    shiftEnd: Date | string,
    shiftStart: Date | string,
    centerName: string,
    type: string
  ) {
    return await axios.post(`${BASE_URL}/api/doctors/makeNewDoctor`, {
      centreName: centerName,
      shiftEnd: shiftEnd,
      shiftStart: shiftStart,
      type: type,
      user: {
        email: email,
        phone: phone,
        username: username,
        password: password,
      },
    });
  },
};
