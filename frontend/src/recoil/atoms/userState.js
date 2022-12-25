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

  export const userAtom = atom({
    key: "userAtom",
    default: null,
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

  export const userPictureState = atom({
    key: "userPictureState",
    default:  "https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
  })

  export const userBioState= atom({
    key: "userBioState",
    default: ""
  })

  export const userFollowState = atom({
    key: "followState",
    default: []
  })