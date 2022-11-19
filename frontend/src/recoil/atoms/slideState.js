import { atom } from "recoil";

export const slideCounterState = atom({
  key: "slideCounterState",
  default: 0,
});

export const slideInfoState = atom({
  key: "slideInfoState",
  default: false
});
