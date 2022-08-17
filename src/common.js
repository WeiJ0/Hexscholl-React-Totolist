import dayjs from "dayjs";

export const setUserData = (data) =>
  localStorage.setItem("user", JSON.stringify(data));
export const getUserData = () => {
  let data = JSON.parse(localStorage.getItem("user"));
  if (data && data.date == dayjs().format("YYYY-MM-DD")) {
    return data;
  } else {
    clearUserData();
    return null;
  }
};
export const getAuthToken = () => getUserData().authorization;
export const clearUserData = () => localStorage.clear();

export const checkEmail = (email) => /^.+@.+\..{2,3}$/.test(email);
