import { getAuthToken } from "./common";

const API_URL = "https://todoo.5xcamp.us";

let optionBase = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const userRequest = (method, path, data) => {
  let optionObject = Object.assign({}, { ...optionBase, method });
  if (method === "POST") optionObject.body = JSON.stringify(data);
  
  return fetch(`${API_URL}/users/${path}`, optionObject);
};

const todoRequest = (method, path, data) => {
  let optionObject = Object.assign({}, { ...optionBase, method });
  optionObject.headers.Authorization = getAuthToken();
  if (method === "POST") optionObject.body = JSON.stringify(data);

  return fetch(`${API_URL}/todos/${path}`, optionObject);
};

// User
export const apiLogin = ({ email, password }) =>
  userRequest("POST", "sign_in", {
    user: {
      email,
      password,
    },
  });

export const apiLogout = (data) => userRequest("DELETE", "sign_out", {});

export const apiSignUp = ({ email, nickname, password }) =>
  userRequest("POST", "", {
    user: {
      email,
      nickname,
      password,
    },
  });

// Todo
export const apiTodoList = (data) => todoRequest("GET", "", {});
export const apiAddTodo = ({ content }) =>
  todoRequest("POST", "", {
    todo: {
      content,
    },
  });
export const apiEditTodo = ({ id, content }) =>
  todoRequest("PUT", id, {
    todo: {
      content,
    },
  });
export const apiDelTodo = ({ id }) => todoRequest("DELETE", id, {});
export const apiFinishTodo = ({ id }) =>
  todoRequest("PATCH", `${id}/toggle`, {});
