import { atom } from "recoil";

export const gameListState = atom({
  key: "gameLististState",
  default: [
    {
      _id: "",
      games: [],
      title: "",
      description: "",
      __V: 0,
    },
  ],
});
