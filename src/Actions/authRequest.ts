import axios from 'axios';

// export const getLoginRequest = async (email: string, password: string) => {
//   const res = await axios.post(`http://135.125.169.95:8090/api/auth/login`, {
//     email: email,
//     password: password,
//   });
//   console.log(res);
// };

// export const getRegisterRequest = async (
//   email: string,
//   password: string,
//   phone: string,
//   username: string
// ) => {
//   const res = await axios.post(
//     `http://135.125.169.95:8090/api/auth/registerRequest`,
//     {
//       email: email,
//       password: password,
//       phone: phone,
//       username: username,
//     }
//   );
//   console.log(res);
// };

// export const getAllRegRequest = async () => {
//   const res = await axios.get(
//     `http://135.125.169.95:8090/api/auth/getAllRegRequest`
//   );
//   console.log(res);
// };

// export const getLogoutRequest = async () => {
//   const res = await axios.post(`http://135.125.169.95:8090/api/auth/logout`);
//   console.log(res);
// };

// export const getDenyRegister = async (email: string) => {
//   const res = await axios.get(
//     `http://135.125.169.95:8090/api/auth/denyRegister/${email}`
//   );
//   console.log(res);
// };
// export const getSessionUser = async (email: string) => {
//   const res = await axios.get(
//     `http://135.125.169.95:8090/api/auth/sessionUser?email=${email}`
//   );
//   console.log(res);
// };

// export const getVerifyAccount = async (email: string) => {
//   const res = await axios.get(
//     `http://135.125.169.95:8090/api/auth/verifyAccount/${email}`
//   );
//   console.log(res);
// };

// export const getConfirmRegister = async (email: string, password: string) => {
//   const res = await axios.post(
//     `http://135.125.169.95:8090/api/auth/confirmRegister/${email}`,
//     { password: password }
//   );
//   console.log(res);
// };
