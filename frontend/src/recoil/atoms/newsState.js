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

export const newsTitleState = atom({
    key: "newsTitleState",
    default: "",
    effects: [
        localStorageEffect('current_title')
    ]
  });

export const newsSubtitleState = atom({
    key: "newsSubtitleState",
    default: "",
    effects: [
        localStorageEffect('current_subtitle')
    ]
})

export const newsContentState = atom({
    key: "newsContentState",
    default: null,
    effects: [
        localStorageEffect('current_content')
    ]
})

export const newsUrlState = atom({
    key: "newsUrlState",
    default: "",
    effects: [
        localStorageEffect('current_url')
    ]
})