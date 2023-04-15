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

  async getRegister() {
    return await axios.post(`${BASE_URL}/api/doctors/makeNewDoctor`, {
      centreName: 'Minamisenju',
      shiftEnd: new Date(),
      shiftStart: now,
      type: 'pomosh',
      user: {
        username: 'Doctor',
        password: '12345678',
        email: 'ealkser@gmail.com',
        firstname: 'Эрнест',
        lastname: 'Алексеев',
        city: 'Якутся',
        state: 'Россия',
        date_of_birth: '23.05.2003',
        phone: '89659943654',
      },
    });
  },
};
