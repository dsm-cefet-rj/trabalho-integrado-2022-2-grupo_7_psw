import { atom } from "recoil";

const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

  export const userState = atom({
    key: "userState",
    default: "",
    effects: [
      localStorageEffect('current_user')
    ]
  })

  export const userNameState = atom({
    key: "userNameState",
    default: "",
    effects: [
        localStorageEffect('current_name')
    ]
  });

  export const userEmailState = atom({
    key: "userEmailState",
    default: "",
    effects: [
        localStorageEffect('current_email')
    ]
  });

  export const authAtom = atom({
    key: "auth",
    default: "",
    effects: [
      localStorageEffect('current_auth')
    ]
    
})

  export const userPasswordState = atom({
    key: "userPasswordState",
    default: ""
  })

  export const userPassword2State = atom({
    key :"usePassword2State",
    default: ""
  })

  export const userLevelState = atom({
    key: "userLevelState",
    default: ""
  })