import axios from "axios";

export const getLoginRequest = async (email: string, password: string) => {
  const res = await axios.post(`http://135.125.169.95:8090/api/auth/login`, {
    email: email,
    password: password,
  });
  console.log(res);
};
