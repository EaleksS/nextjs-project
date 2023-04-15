import axios from 'axios';
import { BASE_URL } from '@/http/index';

export const Center = {
  // Получение всех центров
  async getAllCenter() {
    return axios.get(`${BASE_URL}/api/centre/getAll`);
  },
  // Поиск всех центров с фильтрами даты и типа
  async getAllCenterDateType(
    date: Date,
    type: string,
    address: string,
    city: string,
    name: string,
    rating: number,
    state: string
  ) {
    return axios.post(`${BASE_URL}/api/centre/getAll/${date}/${type}`, {
      address: address,
      city: city,
      name: name,
      rating: rating,
      state: state,
    });
  },
  // Получение докторов по типам услуг и названиям центров
  async getDoctorsByType(centreName: string, typeOfExamination: string) {
    return axios.get(
      `${BASE_URL}/api/centre/getDoctorsByType/${centreName}/${typeOfExamination}`
    );
  },
  // Получение докторов по типам услуг, названиям центров и отпускам
  async getDoctorsByTypeAndVacation(
    centreName: string,
    typeOfExamination: string,
    date: Date
  ) {
    return axios.get(
      `${BASE_URL}/api/centre/getDoctorsByTypeAndVacation/${centreName}/${typeOfExamination}/${date}`
    );
  },
  // Поиск центров по работающим в них медработникам
  async getNurse(nurseEmail: string) {
    return axios.get(`${BASE_URL}/api/centre/getNurse/${nurseEmail}`);
  },
  // Получение пациентов центров по названиям центров
  async getPatients(centreName: string) {
    return axios.get(`${BASE_URL}/api/centre/getPatients/${centreName}`);
  },
  // Получение пациентов центров по названиям центром и фильтрация
  async getPatientsByFilter(
    centreName: string,
    city: string,
    date_of_birth: string,
    email: string,
    firstname: string,
    id: number,
    lastname: string,
    password: string,
    phone: string,
    role: string,
    state: string,
    username: string
  ) {
    return axios.post(
      `${BASE_URL}/api/centre/getPatientsByFilter/${centreName}`,
      {
        city: city,
        date_of_birth: date_of_birth,
        email: email,
        firstname: firstname,
        id: id,
        lastname: lastname,
        password: password,
        phone: phone,
        role: role,
        state: state,
        username: username,
      }
    );
  }, // Создание центров
  async getRegisterCentre(
    address: string,
    city: string,
    description: string,
    name: string,
    rating: number,
    state: string
  ) {
    return axios.post(`${BASE_URL}/api/centre/registerCentre`, {
      address: address,
      city: city,
      description: description,
      name: name,
      rating: rating,
      state: state,
    });
  },
};
