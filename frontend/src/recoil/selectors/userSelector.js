import { selector, selectorFamily } from "recoil";

export const asyncAllUsers = selector({
  key: "allUsers",
  get: async () => {
    const response = await fetch("http://localhost:3001/user");
    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.map((event) => ({
      ...event,
      id: event._id,
      name: event.name,
      email: event.email,
      password: event.password,
      level: event.level,
    }));
  },
});

export const asyncGetUserById = selectorFamily({
  key: "getUserById",
  get: (id) => async () => {
    const response = await fetch(`http://localhost:3001/user/${id}`);
    if (!response.ok) {
      // console.log(response.status)

      return null;
    }

    const result = await response.json();
    return result;
  },
});

export const asyncGetUserByEmail = selectorFamily({
  key: "getuserByEmail",
  get: (email) => async () => {
    const response = await fetch(`http://localhost:3001/user/?email=${email}`);
    if (!response.ok) {
      console.log(response.status);
      return undefined;
    }

    const result = await response.json();
    console.log(result.body);
    return result;
  },
});

export const asyncGetUserByName = selectorFamily({
  key: "getuserByName",
  get: (email) => async () => {
    const response = await fetch(`http://localhost:3001/user/?email=${email}`);
    if (!response.ok) {
      console.log(response.status);
      return undefined;
    }

    const result = await response.json();
    console.log(result.body);
    return result;
  },
});
