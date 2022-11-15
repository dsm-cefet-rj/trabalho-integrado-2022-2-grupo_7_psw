import { atom } from "recoil";

export const ratingStateAtom = atom({
  key: "ratingState",
  default: null,
});

export const hoverStateAtom = atom({
    key: "hoverState",
    default: null,
  });